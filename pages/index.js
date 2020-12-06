import { Twitter, GitHub, Pinboard, Scholar } from "../components/icons";
import Link from "next/link";
import { hrefs } from "../components/metadata";

export default function IndexPage() {
  return (
    <div className="mt-16">
      <h1 className="text-center overflow-visible font-serif text-xl lg:text-4xl font-black leading-snug text-gray-dark">
        Niru Maheswaranathan
      </h1>
      <div className="text-gray mx-auto text-center">
        <h2 className="text-md lg:text-2xl mt-2 font-serif italic">
          Machine learning &amp; <br />
          neuroscience research
        </h2>
        <ul className="flex flex-row mt-8 space-x-2 justify-center">
          <li className="hover:text-indigo-600 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.twitter}>
              <Twitter size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.scholar}>
              <Scholar size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.github}>
              <GitHub size={8} />
            </a>
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition duration-050 ease-linear">
            <a href={hrefs.pinboard}>
              <Pinboard size={8} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
