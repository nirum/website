import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 mb-8 border-t border-gray-300 dark:border-gray-700">
      <div className="mt-4 font-sans dim-color text-center mx-auto text-xs sm:text-sm lg:text-base">
        <div>&copy; 2015-2023 Niru Maheswaranathan</div>
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
