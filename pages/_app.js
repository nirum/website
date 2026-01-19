import '../styles/tailwind.css';
import '../styles/index.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const GradientBar = () => (
  <div className='w-full py-1 bg-linear-to-r from-cyan-600 via-indigo-700 to-blue-800 dark:from-blue-600 dark:via-cyan-500 dark:via-teal-600'></div>
);

const THEME_STORAGE_KEY = 'theme';
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [hasManualTheme, setHasManualTheme] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
      setHasManualTheme(true);
      return;
    }

    const media = window.matchMedia(COLOR_SCHEME_QUERY);
    setTheme(media.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || hasManualTheme) {
      return;
    }

    const media = window.matchMedia(COLOR_SCHEME_QUERY);
    const handleChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    if (media.addEventListener) {
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }

    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, [hasManualTheme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    setHasManualTheme(true);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    }
  };

  return (
    <div className='bg-gray-100 dark:bg-zinc-900 min-h-screen'>
      <Head>
        <title>Niru Maheswaranathan</title>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <GradientBar />
      <div className='flex flex-col min-h-screen w-5/6 max-w-3xl mx-auto -mt-2'>
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <div className='grow base-color'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
