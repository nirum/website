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
    let file = fs.readFileSync("posts/" + filename, "utf-8");
    const { data, content } = matter(file);
    console.log(data.tags.includes("draft"));
    if (!data.tags.includes("draft")) {
      data["slug"] = filename.replace(".md", "");
      data["date"] = data["date"].toString();
      posts.push(data);
    }
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
      <div className="mt-8 flex flex-col space-y-4 mt-12 mx-auto">
        {posts.map((p, i) => (
          <div key={i} className="font-sans w-full">
            <Link
              href={"blog/" + p.slug}
              className="font-semibold text-sm sm:text-base lg:text-lg bright-color"
            >
              {p.title}
            </Link>
            <div className="dim-color text-xs sm:text-sm lg:text-base">
              {formatDistance(new Date(p.date), new Date(), {
                addSuffix: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
