import Link from 'next/link';
import { getPosts, postMetadata, renderMarkdown } from '../../lib/blog.js';
import { formatPostDate } from '../../lib/site.js';

export const getStaticPaths = async () => ({
  paths: (await getPosts()).map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps = async ({ params }) => {
  const post = (await getPosts()).find(({ slug }) => slug === params.slug);
  if (!post) return { notFound: true };
  return { props: { post: postMetadata(post), html: await renderMarkdown(post.content) } };
};

export const BlogPostPage = ({ post, html }) => (
  <article className='blog-post min-w-0' aria-labelledby='post-title'>
    <header>
      <h1 id='post-title' className='break-words'>{post.title}</h1>
      <div className='mt-4 font-sans text-sm dim-color'>
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        {post.tags.length > 0 && <span> · {post.tags.join(', ')}</span>}
      </div>
      <p className='font-sans'>{post.description}</p>
    </header>
    <div className='blog-content' dangerouslySetInnerHTML={{ __html: html }} />
    <nav aria-label='Blog navigation' className='mt-12 font-sans text-base'>
      <Link href='/blog/'>← All posts</Link>
    </nav>
  </article>
);

export default BlogPostPage;
