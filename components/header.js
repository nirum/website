import Link from "next/link";
import ActiveLink from "./active-link";

const Logo = () => (
  <Link href="/">
    <svg
      className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-indigo-600 dark:text-cyan-500 hover:text-gray-100 dark:hover:text-gray-900 hover:bg-gradient-to-r from-cyan-600 via-indigo-700 to-blue-800 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-500 rounded-full cursor-pointer fade"
      viewBox="0 0 64 64"
      strokeLinejoin="round"
    >
      <path
        d="M31.997 7.381c-5.859 0-10.4 8.67-11.215 20.714 1.052 1.115 2.286 2.225 3.655 3.306a48.32 48.32 0 01.192-3.632c1.102-.763 2.486-1.695 3.58-2.33 5.038-2.908 10.223-4.824 14.596-5.392a18.674 18.674 0 012.397-.163c2.456 0 4.195.59 4.837 1.7.577 1.006.318 2.604-.65 4.475.99.919 1.93 1.85 2.767 2.79 2.13-3.528 2.566-6.733 1.16-9.158-1.671-2.892-5.57-4.106-10.992-3.403-4.86.628-10.54 2.715-16.008 5.874-.348.199-.672.42-1.013.636 1.361-7.007 4.128-11.63 6.694-11.63 1.199 0 2.441 1.022 3.566 2.798 1.288-.4 2.559-.748 3.795-1.008-1.96-3.513-4.505-5.577-7.36-5.577zm-12.841 8.736c-4.106-.074-7.08 1.155-8.479 3.574-1.522 2.634-.888 6.17 1.731 10.053.237.362.497.747.822 1.169 2.973 3.89 7.619 7.766 13.086 10.925.348.2.71.379 1.066.577-2.168.749-4.268 1.288-6.2 1.54-3.69.48-6.391-.096-7.219-1.54-.585-1.005-.326-2.603.642-4.474-.99-.919-1.93-1.85-2.772-2.782-2.125 3.52-2.56 6.724-1.156 9.15 1.362 2.36 4.203 3.602 8.138 3.602.896 0 1.858-.066 2.856-.199.577-.074 1.153-.17 1.746-.288l.414-.089c.029 0 .052-.007.08-.015a37.054 37.054 0 003.39-.91l1.25-.385a50.428 50.428 0 005.658-2.352c.415-1.375.784-2.98 1.064-4.831a53.069 53.069 0 01-3.29 1.687 48.36 48.36 0 01-3.773-1.967c-5.045-2.915-9.299-6.443-11.969-9.942-2.265-2.968-3.115-5.593-2.278-7.036.568-.99 2.078-1.553 4.157-1.657a37.868 37.868 0 011.036-3.81zm21.821 8.115c-1.494.348-3.077.86-4.696 1.502a56.44 56.44 0 013.085 1.997c.117 1.377.206 2.782.206 4.269 0 11.17-3.513 19.691-6.895 20.72-.23.073-.466.111-.68.111-1.199 0-2.44-1.013-3.566-2.803a40.135 40.135 0 01-3.795 1.013c1.96 3.513 4.505 5.578 7.361 5.578.377 0 .74-.038 1.095-.112C39.017 55.384 43.36 45.233 43.36 32c0-.407-.03-.8-.038-1.206 1.733 1.501 3.255 3.049 4.439 4.586 2.257 2.968 3.107 5.592 2.278 7.035-.583.998-2.07 1.576-4.164 1.68-.296 1.324-.63 2.604-1.029 3.795.104 0 .23.021.334.021 3.935 0 6.775-1.242 8.137-3.602 1.672-2.892.769-6.88-2.553-11.222-2.352-3.077-5.762-6.14-9.787-8.855zm-8.98 3.98A3.786 3.786 0 0028.21 32a3.786 3.786 0 003.787 3.787A3.786 3.786 0 0035.785 32a3.786 3.786 0 00-3.788-3.788z"
        strokeWidth="1.0"
      />
    </svg>
  </Link>
);

export default function Header() {
  const active =
    "text-indigo-600 dark:text-cyan-500 border-b-2 dark:border-cyan-700 border-indigo-400";
  const inactive =
    "hover:text-indigo-600 dark:hover:text-cyan-500 cursor-pointer hover:border-indigo-400 dark:hover:border-cyan-700 fade";
  return (
    <header className="mx-auto py-8 w-full">
      <ul className="flex flex-row text-sm sm:text-base dim-color space-x-3 uppercase tracking-wide">
        <Logo />
        <div className="flex-grow"></div>
        <li>
          <ActiveLink href="/about" activeClassName={active}>
            <div className={inactive}>About</div>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/blog" activeClassName={active}>
            <div className={inactive}>Blog</div>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/research" activeClassName={active}>
            <div className={inactive}>Research</div>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/code" activeClassName={active}>
            <div className={inactive}>Code</div>
          </ActiveLink>
        </li>
      </ul>
    </header>
  );
}
