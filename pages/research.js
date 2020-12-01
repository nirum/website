import React from "react";
const yaml = require('js-yaml');
import fs from 'fs';
import PubCard from "../components/pub-card"

export const getStaticProps = async () => {
    const filenames = fs.readdirSync("publications");
    const data = [];
    const parse = (o) => {
        o.date = o.date.toJSON()
        return o
    }
    filenames.forEach(filename => {
        let file = fs.readFileSync('publications/' + filename, 'utf-8');
        let obj = yaml.safeLoad(file);
        data.push(parse(obj))
    })
    return {
        props: {
            pubs: data
        }
    }
}

export default function ResearchPage({pubs}) {
    return (
        <div>
            <h1>Research</h1>
            <h2>latest research</h2>
            <div>
                {pubs.map((p, i) => {
                    return (<div key={i}><PubCard {...p}/></div>)
                })}
            </div>
        </div>
    )
}