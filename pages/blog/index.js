import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import formatDistance from "date-fns/formatDistance";

export const getStaticProps = async () => {
  const filenames = fs.readdirSync("posts").filter((f) => f.endsWith(".md"));
  const posts = [];

  filenames.forEach((filename) => {
    console.log(filename);
    let file = fs.readFileSync("posts/" + filename, "utf-8");
    console.log(file);
    const { data, content } = matter(file);
    console.log(data);
    data["slug"] = filename.replace(".md", "");
    data["date"] = data["date"].toString();
    posts.push(data);
  });

  posts.sort((p, q) => new Date(q.date) - new Date(p.date));
  return {
    props: {
      posts,
    },
  };
};

export default function BlogPage({ posts }) {
  return (
    <div>
      <h1>Blog posts</h1>
      <h4>We have {posts.length} posts.</h4>
      <div className="mt-8 flex flex-col space-y-4 mt-12 mx-auto">
        {posts.map((p, i) => (
          <article key={i} className="font-sans w-full">
            <Link
              href={"blog/" + p.slug}
              className="font-semibold text-sm sm:text-base lg:text-lg"
            >
              {p.title}
            </Link>
            <div className="text-coolgray-400 text-xs sm:text-sm lg:text-base">
              {formatDistance(new Date(p.date), new Date(), {
                addSuffix: true,
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
