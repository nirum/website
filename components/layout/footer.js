import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center mx-auto mt-20 mb-8">
      <div className="font-sans text-coolgray-500 dark:text-foo text-sm sm:text-base">
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
