import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 mb-8 border-t border-gray-300 dark:border-gray-700">
      <div className="mt-4 font-sans text-coolgray-500 text-center mx-auto text-sm sm:text-base lg:text-lg">
        <p>&copy; 2015-2020 Niru Maheswaranathan</p>
        <p>
          Made with&nbsp;
          <a
            href="https://tailwindcss.com/"
            className="hover:text-indigo-600 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear border-b border-gray-300 hover:border-indigo-300 dark:border-gray-700 dark:hover:border-cyan-600"
          >
            Tailwind CSS
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://nextjs.org"
            className="hover:text-indigo-600 dark:hover:text-cyan-300 cursor-pointer transition duration-050 ease-linear border-b border-gray-300 hover:border-indigo-300 dark:border-gray-700 dark:hover:border-cyan-600"
          >
            NextJS
          </a>
        </p>
      </div>
    </footer>
  );
}
