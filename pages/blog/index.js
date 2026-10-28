import Link from 'next/link';
import { getPosts, postMetadata } from '../../lib/blog.js';
import { formatPostDate } from '../../lib/site.js';

export const getStaticProps = async () => ({
  props: { posts: (await getPosts()).map(postMetadata) },
});

export const BlogPage = ({ posts }) => (
  <section aria-labelledby='blog-title'>
    <h1 id='blog-title'>Blog</h1>
    <p className='font-sans'>Notes on research and software. <a href='/rss.xml'>Subscribe via RSS</a>.</p>
    {posts.length === 0 && <p>No posts yet.</p>}
    <ol className='mt-10 space-y-10'>
      {posts.map((post) => (
        <li key={post.slug}>
          <h2 className='mt-0 font-serif'>
            <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
          </h2>
          <time dateTime={post.date} className='dim-color text-sm font-sans'>{formatPostDate(post.date)}</time>
          <p className='mt-2 font-sans'>{post.description}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default BlogPage;
