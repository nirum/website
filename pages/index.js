export default function IndexPage() {
  return (
    <div>
      {/* <div className="flex flex-col items-center py-12 mb-16 md:mb-24"> */}
        {/* <Img className="object-cover w-32 h-32 border-2 rounded-full shadow-xl md:w-48 md:h-48 border-brand bg-background" fluid={data.file.childImageSharp.fluid} alt="Profile" /> */}
        {/* <div className="w-full h-0 -my-16 border-t-2 md:-my-24 border-brand"></div> */}
      {/* </div> */}
      <article className="prose prose-lg prose-blue">
        <h1>Niru Maheswaranathan</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <h4>This is an h4</h4>
        <p>This is a paragraph</p>
        <h4>Machine learning and neuroscience research</h4>
        <h2>About Me</h2>
        <p>I am interested in developing tools and analyses for understanding exactly <em>how</em> machine learning models work. Currently, I conduct this work on the <a href="https://research.google/teams/brain/" target="_blank" rel="noopener noreferrer">Brain Team</a> at Google Research.</p>
        <p>Previously, I completed my PhD in neuroscience in the labs of <a href="https://ganguli-gang.stanford.edu/people.html" target="_blank" rel="noopener noreferrer">Surya Ganguli</a> and <a href="https://baccuslab.sites.stanford.edu" target="_blank" rel="noopener noreferrer">Steve Baccus</a> at Stanford University, where I studied neural circuits in the retina. My research focused on bringing together computational models and data from electrophysiological experiments to better understand how we process visual information.</p>
        <p>Outside of research, I enjoy cooking, working on open source projects, and playing soccer. I majored in biomedical and electrical & computer engineering at Duke University. Before that, I attended the SC Governor&rsquo;s School for Science and Math (<a href="https://www.scgssm.org" target="_blank" rel="noopener noreferrer">GSSM</a>) in Hartsville, SC. I grew up in Rock Hill, South Carolina.</p>
        <p>You can get in contact with me at: <a href="mailto:niru@hey.com" target="_blank" rel="noopener noreferrer">niru@hey.com</a></p>
      </article>
    </div>
  )
}
