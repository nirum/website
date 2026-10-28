import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPosts, parsePost, postsDirectory, renderMarkdown } from '../lib/blog.js';
import { createRss, createSitemap } from '../lib/feeds.js';
import { canonicalUrl, formatPostDate } from '../lib/site.js';

const markdown = (fields = '') => `---
title: 'Example & notes'
date: '2026-01-02'
description: 'A description with <markup> & "quotes".'
${fields}
---
## Heading

A [link](/about/) and an image: ![Description](/blog/example.png).

\`\`\`python
def example():
    return 42
\`\`\`
`;

test('frontmatter is normalized and validated with actionable errors', () => {
  const post = parsePost(markdown('tags: [research]'), 'example');
  assert.equal(post.date, '2026-01-02');
  assert.deepEqual(post.tags, ['research']);
  assert.equal(post.draft, false);
  assert.throws(() => parsePost(markdown(), '../example'), /Invalid blog slug/);
  assert.throws(() => parsePost(markdown().replace("title: 'Example & notes'", ''), 'example'), /title/);
  assert.throws(() => parsePost(markdown().replace('2026-01-02', '2026-02-30'), 'example'), /valid YYYY-MM-DD/);
  assert.throws(() => parsePost(markdown('tags: research'), 'example'), /list of strings/);
  assert.throws(() => parsePost(markdown('draft: "false"'), 'example'), /true or false/);
});

test('Markdown renders headings, links, images and highlighted code safely', async () => {
  const html = await renderMarkdown(parsePost(markdown(), 'example').content +
    '\n<script>alert(1)</script>\n\n[unsafe](javascript:alert%281%29)');
  assert.match(html, /<h2>Heading<\/h2>/);
  assert.match(html, /href="\/about\/"/);
  assert.match(html, /src="\/blog\/example.png" alt="Description"/);
  assert.match(html, /hljs-keyword/);
  assert.doesNotMatch(html, /<script|href="javascript:/);
  assert.match(await renderMarkdown('```unknown-language\nplain code\n```'), /plain code/);
});

test('publication excludes drafts and future posts and sorts newest first', async () => {
  const prefix = `test-post-${process.pid}`;
  const fixtures = [
    ['older', markdown()],
    ['newer', markdown().replace('2026-01-02', '2026-01-03')],
    ['future', markdown().replace('2026-01-02', '2099-01-01')],
    ['draft', markdown('draft: true')],
    ['draft-tag', markdown('tags: [draft]')],
  ];
  try {
    for (const [name, source] of fixtures) {
      await fs.writeFile(path.join(postsDirectory, `${prefix}-${name}.md`), source);
    }
    const posts = (await getPosts({ now: new Date('2026-02-01T00:00:00Z') }))
      .filter((post) => post.slug.startsWith(prefix));
    assert.deepEqual(posts.map((post) => post.slug), [`${prefix}-newer`, `${prefix}-older`]);
  } finally {
    await Promise.all(fixtures.map(([name]) => fs.rm(path.join(postsDirectory, `${prefix}-${name}.md`), { force: true })));
  }
});

test('RSS and sitemap escape content and use canonical trailing-slash URLs', () => {
  const posts = [parsePost(markdown('tags: ["a & b"]'), 'example')];
  const rss = createRss(posts);
  assert.match(rss, /Example &amp; notes/);
  assert.match(rss, /&lt;markup&gt; &amp; &quot;quotes&quot;/);
  assert.match(rss, /<category>a &amp; b<\/category>/);
  assert.match(rss, /Fri, 02 Jan 2026 00:00:00 GMT/);
  assert.match(rss, /https:\/\/niru.dev\/blog\/example\//);
  const sitemap = createSitemap(posts);
  for (const route of ['/', '/about/', '/research/', '/code/', '/blog/', '/blog/example/']) {
    assert.ok(sitemap.includes(`https://niru.dev${route}`));
  }
  assert.equal(canonicalUrl('/blog/example/'), 'https://niru.dev/blog/example/');
  assert.equal(formatPostDate('2026-01-02'), 'January 2, 2026');
});
