import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 mb-8 border-t border-gray-300 dark:border-gray-700">
      <div className="mt-4 font-sans dim-color text-center mx-auto text-sm sm:text-base lg:text-lg">
        <div>&copy; 2015-2020 Niru Maheswaranathan</div>
        <div>
          Made with&nbsp;
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
          &nbsp;and&nbsp;
          <a href="https://nextjs.org">NextJS</a>
        </div>
      </div>
    </footer>
  );
}
