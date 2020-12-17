import { hrefs } from "../components/metadata";

export default function IndexPage() {
  return (
    <div className="mt-8">
      <article className="font-serif mx-auto">
        <h2 className="text-gray-dark dark:text-coolgray-200 text-xl sm:text-2xl lg:text-4xl font-black">
          About me
        </h2>
        <div className="flex flex-wrap justify-center mt-4 mb-8 lg:mt-8 lg:mb-12">
          <div className="relative w-32 h-32 lg:w-48 lg:h-48 shadow-xl dark:shadow-none rounded-full border border-indigo-600 dark:border-cyan-400">
            <img
              src="/profile.png"
              alt="..."
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-gray-700 dark:text-coolgray-400 leading-relaxed sm:text-lg lg:text-xl">
          <p className="mt-6">
            I am interested in developing tools and analyses for understanding
            exactly <em>how</em> machine learning models work. Currently, I
            conduct this work on the&nbsp;
            <a href="https://research.google/teams/brain/">Brain Team</a>
            &nbsp;at Google Research.
          </p>
          <p className="mt-6">
            Previously, I completed my PhD in neuroscience in the labs of&nbsp;
            <a href="https://ganguli-gang.stanford.edu/people.html">
              Surya Ganguli
            </a>
            &nbsp; and&nbsp;
            <a href="https://baccuslab.sites.stanford.edu">Steve Baccus</a>
            &nbsp; at Stanford University, where I studied neural circuits in
            the retina. My research focused on bringing together computational
            models and data from electrophysiological experiments to better
            understand how we process visual information.
          </p>
          <p className="mt-6">
            Outside of research, I enjoy cooking, working on open source
            projects, and playing soccer. I majored in biomedical and electrical
            & computer engineering at Duke University. Before that, I attended
            the SC Governor&rsquo;s School for Science and Math (
            <a href="https://www.scgssm.org">GSSM</a>) in Hartsville, SC. I grew
            up in Rock Hill, South Carolina.
          </p>
          <p>
            You can get in contact with me at:&nbsp;
            <a href={hrefs.email}>niru@hey.com</a>
          </p>
        </div>
      </article>
    </div>
  );
}
