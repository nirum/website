import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { format } from "date-fns";

export const getStaticPaths = async () => {
  const filenames = fs.readdirSync("posts").filter((f) => f.endsWith(".md"));
  const paths = [];

  filenames.forEach((filename) => {
    const file = fs.readFileSync("posts/" + filename, "utf-8");
    const { data } = matter(file);
    const tags = data.tags || [];
    if (!tags.includes("draft")) {
      paths.push({ params: { slug: filename.replace(".md", "") } });
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const file = fs.readFileSync("posts/" + params.slug + ".md", "utf-8");
  const { data, content } = matter(file);

  const result = await remark().use(html).process(content);

  return {
    props: {
      title: data.title,
      date: data.date.toString(),
      content: result.toString(),
    },
  };
};

export default function BlogPost({ title, date, content }) {
  return (
    <div>
      <Link
        href="/blog"
        className="dim-color text-sm font-sans hover:text-indigo-600 dark:hover:text-cyan-500"
      >
        &larr; Back to blog
      </Link>
      <h1>{title}</h1>
      <p className="dim-color font-sans text-sm sm:text-base !mt-2">
        {format(new Date(date), "MMMM d, yyyy")}
      </p>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
