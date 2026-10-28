import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export const parsePost = (source, slug) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid blog slug: ${slug}. Use lowercase words separated by hyphens.`);
  }
  const { data, content } = matter(source);
  for (const field of ['title', 'description']) {
    if (typeof data[field] !== 'string' || !data[field].trim()) {
      throw new Error(`${slug}: frontmatter requires a nonempty ${field}.`);
    }
  }
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date;
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
    throw new Error(`${slug}: date must be a valid YYYY-MM-DD date (quote it in YAML).`);
  }
  const tags = data.tags ?? [];
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string')) {
    throw new Error(`${slug}: tags must be a list of strings.`);
  }
  if (data.draft !== undefined && typeof data.draft !== 'boolean') {
    throw new Error(`${slug}: draft must be true or false.`);
  }
  return {
    slug, title: data.title, description: data.description, date, tags,
    draft: data.draft === true || tags.includes('draft'), content,
  };
};

export const getPosts = async ({ now = new Date() } = {}) => {
  const filenames = (await fs.readdir(postsDirectory)).filter((name) => name.endsWith('.md'));
  const posts = await Promise.all(filenames.map(async (filename) =>
    parsePost(await fs.readFile(path.join(postsDirectory, filename), 'utf8'), filename.slice(0, -3))
  ));
  return posts
    .filter((post) => !post.draft && post.date <= now.toISOString().slice(0, 10))
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
};

export const postMetadata = ({ content, draft, ...metadata }) => metadata;

export const renderMarkdown = async (content) => {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight, { detect: false, ignoreMissing: true })
    .use(rehypeStringify)
    .process(content);
  return String(result);
};
