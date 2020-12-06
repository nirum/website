import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center mx-auto mt-20 mb-8 text-sm">
      <div className="font-sans text-gray text-md">
        <p>&copy; 2015-2020 Niru Maheswaranathan</p>
        <p>
          Made with&nbsp;
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
          &nbsp;and&nbsp;
          <a href="https://nextjs.org">NextJS</a>
        </p>
      </div>
      <div className="h-1 bg-red-600 sm:bg-green-600 md:bg-pink-600 lg:bg-blue-600 xl:bg-yellow-600 2xl:bg-indigo-600 mt-2"></div>
    </footer>
  );
}
