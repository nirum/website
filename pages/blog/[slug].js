import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const Post = ({ title, description, slug, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <article
        className="pt-16"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts").filter((f) => f.endsWith(".md"));
  const paths = files.map((filename) => {
    return { params: { slug: filename.replace(".md", "") } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const fullPath = path.join("posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const content_html = await markdownToHtml(content);
  data["slug"] = slug;
  data["content"] = content_html;
  data["date"] = data["date"].toString();
  return {
    props: data,
  };
};

export default Post;
