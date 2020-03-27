import React from "react"
import Layout from "../components/layout"
import Social from "../components/social"

import profile from "./profile.png"

export default () => (
  <Layout>
    <div className="flex justify-left items-start">
      <div className="-ml-32 mr-8 -mt-3">
        <img className="w-24 h-24 rounded-full shadow-xl" src={profile} alt="Splash" />
      </div>
      <div>
        <h4>About Me</h4>
        <h1>Hello! I&rsquo;m Niru.</h1>
      </div>
    </div>
    <p className='mt-4'>I am interested in developing tools and analyses for understanding exactly <em>how</em> machine learning models work. Currently, I conduct this work at the <a href="https://research.google/teams/brain/" target="_blank" rel="noopener noreferrer">Brain Team</a> at Google Research.</p>
    <p className='mt-4'>Previously, I completed my PhD in neuroscience in the labs of <a href="https://ganguli-gang.stanford.edu/people.html" target="_blank">Surya Ganguli</a> and <a href="https://baccuslab.sites.stanford.edu" target="_blank">Steve Baccus</a> at Stanford University, where I studied neural circuits in the retina. My research focused on brining together computational models and data from electrophysiological experiments to better understand how we process visual information.</p>
    
    <p className='mt-4'>Outside of research, I enjoy teaching, working on open source projects, and playing soccer. I majored in biomedical and electrical & computer engineering at Duke University. Before that, I attended the SC Governor&rsquo;s School for Science and Math (<a href="https://www.scgssm.org" target="_blank" rel="noopener noreferrer">GSSM</a>) in Hartsville, SC. I grew up in Rock Hill, South Carolina.</p>
    
    <p className='mt-4'>You can get in contact with me at: <a href="mailto:niru@fastmail.com" target="_blank" rel="noopener noreferrer">niru@fastmail.com</a></p>
    <Social />
  </Layout>
)
