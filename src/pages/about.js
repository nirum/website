import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({data}) => (
  <Layout>
    <div className="flex flex-col items-center pt-12 md:pt-20">
      <h1 className="text-2xl font-black tracking-tighter sm:text-3xl md:text-4xl text-gradient">Niru Maheswaranathan</h1>
      <h2 className="font-serif text-sm italic tracking-tight text-md sm:text-lg md:text-2xl text-foreground-secondary">Machine learning and neuroscience research</h2>
    </div>
    <div className="flex flex-col items-center py-12 mb-16 md:mb-24">
      <Img className="object-cover w-32 h-32 border-2 rounded-full shadow-xl md:w-48 md:h-48 border-brand-primary" fluid={data.file.childImageSharp.fluid} alt="Profile" />
      <div className="w-full h-1 -my-16 md:-my-24 bg-brand-primary"></div>
    </div>
    <div className="py-16 font-serif md:py-24 text-foreground-secondary">
      <h2 className="font-sans text-2xl font-semibold text-foreground">About Me</h2>
      <p className="mt-4">I am interested in developing tools and analyses for understanding exactly <em>how</em> machine learning models work. Currently, I conduct this work on the <a href="https://research.google/teams/brain/" target="_blank" rel="noopener noreferrer">Brain Team</a> at Google Research.</p>
      <p className="mt-4">Previously, I completed my PhD in neuroscience in the labs of <a href="https://ganguli-gang.stanford.edu/people.html" target="_blank" rel="noopener noreferrer">Surya Ganguli</a> and <a href="https://baccuslab.sites.stanford.edu" target="_blank" rel="noopener noreferrer">Steve Baccus</a> at Stanford University, where I studied neural circuits in the retina. My research focused on bringing together computational models and data from electrophysiological experiments to better understand how we process visual information.</p>
      <p className="mt-4">Outside of research, I enjoy cooking, working on open source projects, and playing soccer. I majored in biomedical and electrical & computer engineering at Duke University. Before that, I attended the SC Governor&rsquo;s School for Science and Math (<a href="https://www.scgssm.org" target="_blank" rel="noopener noreferrer">GSSM</a>) in Hartsville, SC. I grew up in Rock Hill, South Carolina.</p>
      <p className="mt-4">You can get in contact with me at: <a href="mailto:niru@fastmail.com" target="_blank" rel="noopener noreferrer">niru@fastmail.com</a></p>
    </div>
    {/* <h4>Writing</h4> */}
    {/* <h1>Blog posts</h1> */}
    {/* <ul> */}
      {/* <li>hello</li> */}
    {/* </ul> */}
  </Layout>
)

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