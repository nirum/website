import { canonicalUrl, pageMetadata, site } from './site.js';

const escapeXml = (value) => String(value).replace(/[<>&"']/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
})[character]);

export const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pageMetadata).map((pathname) => `  <url><loc>${escapeXml(canonicalUrl(pathname))}</loc></url>`).join('\n')}
${posts.map((post) => `  <url><loc>${escapeXml(canonicalUrl(`/blog/${post.slug}`))}</loc></url>`).join('\n')}
</urlset>
`;

export const createRss = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${escapeXml(site.name)} — Blog</title>
<link>${canonicalUrl('/blog')}</link>
<description>${escapeXml(pageMetadata['/blog'].description)}</description>
<language>en</language>
<atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
${posts.map((post) => {
    const url = escapeXml(canonicalUrl(`/blog/${post.slug}`));
    return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(post.description)}</description>${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('')}</item>`;
  }).join('\n')}
</channel></rss>
`;
