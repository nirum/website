import React from "react";
const yaml = require("js-yaml");
import fs from "fs";
import PubCard from "../components/pub-card";
import { hrefs } from "../components/metadata";
import path from "path";

function changeExtension(file) {
  return path.join("/pubs/", path.basename(file, path.extname(file)) + ".jpg");
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
      <article className="prose text-gray-dark prose-sm font-serif">
        <h2>Selected publications</h2>
        <p>
          For a full list of recent work, check out&nbsp;
          <a href={hrefs.scholar}>Google Scholar</a>.
        </p>
      </article>
      <div className="flex flex-col space-y-8 mt-12">
        {pubs.map((p, i) => {
          return <PubCard key={i} {...p} />;
        })}
      </div>
    </div>
  );
}
