import { Head, Html, Main, NextScript } from 'next/document';

const THEME_STORAGE_KEY = 'theme';
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem('${THEME_STORAGE_KEY}');
      const prefersDark = window.matchMedia('${COLOR_SCHEME_QUERY}').matches;
      const theme =
        storedTheme === 'dark' || storedTheme === 'light'
          ? storedTheme
          : prefersDark
          ? 'dark'
          : 'light';

      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.style.colorScheme = theme;
    } catch (error) {}
  })();
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
