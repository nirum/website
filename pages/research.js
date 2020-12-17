import React from "react";
const yaml = require("js-yaml");
import fs from "fs";
import PubCard from "../components/pub-card";
import { hrefs } from "../components/metadata";
import path from "path";

function changeExtension(file) {
  return path.join("/pubs/", path.basename(file, path.extname(file)) + ".png");
}

export const getStaticProps = async () => {
  const filenames = fs.readdirSync("publications");
  const data = [];
  const parse = (o) => {
    o.date = o.date.toJSON();
    return o;
  };
  filenames.forEach((filename) => {
    let file = fs.readFileSync("publications/" + filename, "utf-8");
    let obj = yaml.safeLoad(file);
    obj.image = changeExtension(filename);
    data.push(parse(obj));
  });
  // sort by name
  data.sort(function (a, b) {
    var nameA = new Date(a.date);
    var nameB = new Date(b.date);
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });
  return {
    props: {
      pubs: data,
    },
  };
};

export default function ResearchPage({ pubs }) {
  return (
    <div className="mt-8">
      <article className="font-serif text-gray-700 dark:text-coolgray-400">
        <h2 className="dark:text-coolgray-200 text-xl sm:text-2xl lg:text-4xl font-black">
          Selected publications
        </h2>
        <p className="text-md sm:text-lg lg:text-2xl mt-2 font-serif italic text-coolgray-500 dark:text-coolgray-500">
          For a full list of recent work, check out&nbsp;
          <a href={hrefs.scholar}>Google Scholar</a>.
        </p>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {pubs.map((p, i) => {
          return <PubCard key={i} {...p} />;
        })}
      </div>
    </div>
  );
}
