import Head from 'next/head';
import { canonicalUrl, pageMetadata, site } from '../lib/site.js';

export const SiteHead = ({ pathname, post }) => {
  const metadata = post || pageMetadata[pathname] || { title: 'Page not found', description: site.description };
  const title = metadata.title === site.name ? site.name : `${metadata.title} | ${site.name}`;
  const url = canonicalUrl(post ? `/blog/${post.slug}` : pathname);

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={metadata.description} />
      <link rel='canonical' href={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={site.name} />
      <meta property='og:type' content={post ? 'article' : 'website'} />
      {post && <meta property='article:published_time' content={`${post.date}T00:00:00Z`} />}
      {post && <meta property='article:author' content={site.name} />}
      <meta name='twitter:card' content='summary' />
      <link rel='alternate' type='application/rss+xml' title={`${site.name} — Blog`} href='/rss.xml' />
    </Head>
  );
};
