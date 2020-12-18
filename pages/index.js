import { Twitter, GitHub, Pinboard, Scholar } from "../components/icons";
import Link from "next/link";
import { hrefs } from "../components/metadata";

export default function IndexPage() {
  return (
    <div className="mt-16">
      <h1 className="text-center overflow-visible font-serif text-xl sm:text-2xl lg:text-4xl font-semibold md:font-black leading-snug text-coolgray-800 dark:text-coolgray-200">
        Niru Maheswaranathan
      </h1>
      <div className=" mx-auto text-center">
        <h2 className="text-md sm:text-lg lg:text-2xl mt-2 font-serif italic text-coolgray-500 dark:text-coolgray-500">
          Machine learning &amp; neuroscience&nbsp;research
        </h2>
        <ul className="flex flex-row mt-8 space-x-2 justify-center text-coolgray-600 dark:text-coolgray-400">
          <li className="hover:text-indigo-500 w-8 h-8 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.twitter}>
              <Twitter size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-500 w-8 h-8 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.scholar}>
              <Scholar size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-500 w-8 h-8 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.github}>
              <GitHub size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-500 w-8 h-8 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.pinboard}>
              <Pinboard size={8} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
