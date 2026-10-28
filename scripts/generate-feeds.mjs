import fs from 'node:fs/promises';
import { getPosts } from '../lib/blog.js';
import { createRss, createSitemap } from '../lib/feeds.js';
import { site } from '../lib/site.js';

const posts = await getPosts();
await fs.writeFile('out/rss.xml', createRss(posts));
await fs.writeFile('out/sitemap.xml', createSitemap(posts));
await fs.writeFile('out/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
console.log(`Generated RSS and sitemap for ${posts.length} published post(s).`);
