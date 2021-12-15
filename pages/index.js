import { Twitter, GitHub, Pinboard, Scholar } from "../components/icons";
import Link from "next/link";
import { hrefs } from "../components/metadata";

export default function IndexPage() {
  return (
    <div className="mt-16 text-center">
      <h1>Niru Maheswaranathan</h1>
      <div className="mx-auto">
        <h4>Machine learning &amp; neuroscience&nbsp;research</h4>
        <ul className="flex flex-row mt-8 space-x-2 justify-center text-gray-600 dark:text-gray-400">
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
