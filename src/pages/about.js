import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({data}) => {
  const ptype = "mt-8 leading-loose"
  return (
  <Layout>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-black tracking-tighter sm:text-3xl md:text-4xl text-gradient">Niru Maheswaranathan</h1>
      <h2 className="font-serif text-sm italic tracking-tight sm:text-lg md:text-2xl text-foreground">Machine learning and neuroscience research</h2>
    </div>
    <div className="flex flex-col items-center py-12 mb-16 md:mb-24">
      <Img className="object-cover w-32 h-32 border-2 rounded-full shadow-xl md:w-48 md:h-48 border-brand" fluid={data.file.childImageSharp.fluid} alt="Profile" />
      <div className="w-full h-0 -my-16 border-t-2 md:-my-24 border-brand"></div>
    </div>
    <div className="pt-16 font-serif text-base md:text-lg md:pt-24 text-foreground">
      <h2 className="font-sans text-xl font-semibold tracking-tight md:text-2xl text-foreground-primary">About Me</h2>
      <p className={ptype}>I am interested in developing tools and analyses for understanding exactly <em>how</em> machine learning models work. Currently, I conduct this work on the <a href="https://research.google/teams/brain/" target="_blank" rel="noopener noreferrer">Brain Team</a> at Google Research.</p>
      <p className={ptype}>Previously, I completed my PhD in neuroscience in the labs of <a href="https://ganguli-gang.stanford.edu/people.html" target="_blank" rel="noopener noreferrer">Surya Ganguli</a> and <a href="https://baccuslab.sites.stanford.edu" target="_blank" rel="noopener noreferrer">Steve Baccus</a> at Stanford University, where I studied neural circuits in the retina. My research focused on bringing together computational models and data from electrophysiological experiments to better understand how we process visual information.</p>
      <p className={ptype}>Outside of research, I enjoy cooking, working on open source projects, and playing soccer. I majored in biomedical and electrical & computer engineering at Duke University. Before that, I attended the SC Governor&rsquo;s School for Science and Math (<a href="https://www.scgssm.org" target="_blank" rel="noopener noreferrer">GSSM</a>) in Hartsville, SC. I grew up in Rock Hill, South Carolina.</p>
      <p className={ptype}>You can get in contact with me at: <a href="mailto:niru@hey.com" target="_blank" rel="noopener noreferrer">niru@hey.com</a></p>
    </div>
    {/* <h4>Writing</h4> */}
    {/* <h1>Blog posts</h1> */}
    {/* <ul> */}
      {/* <li>hello</li> */}
    {/* </ul> */}
  </Layout>
  )
};

export const query = graphql`
  query {
    file(relativePath: {eq: "profile.png"}) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`