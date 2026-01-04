import React from 'react';
import yaml from 'js-yaml';
import fs from 'fs';
import PubCard from '../components/pub-card';
import { hrefs } from '../components/metadata';
import { changeExtension } from '../lib/publications.js';

export const getStaticProps = async () => {
  const filenames = fs.readdirSync('publications');
  const data = [];
  const parse = (o) => {
    o.date = o.date.toJSON();
    return o;
  };
  filenames.forEach((filename) => {
    const file = fs.readFileSync('publications/' + filename, 'utf-8');
    const obj = yaml.load(file);
    obj.image = changeExtension(filename);
    data.push(parse(obj));
  });
  // sort by name
  data.sort((a, b) => {
    const nameA = new Date(a.date);
    const nameB = new Date(b.date);
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
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
      <h1>Selected publications</h1>
      <h4>
        For a full list of recent work, check out&nbsp;
        <a href={hrefs.scholar}>Google Scholar</a>.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {pubs.map((p, i) => {
          return <PubCard key={i} {...p} />;
        })}
      </div>
    </div>
  );
}
