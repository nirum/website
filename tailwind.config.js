
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#1e1e1d",
              textDecoration: "none",
              fontWeight: "500",
            },
          },
        },
      },
    },
    fontFamily: {
      sans: [
        '"Source Sans Pro"',
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Roboto",
        '"Noto Sans"',
        "sans-serif",
        "Arial",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        '"Source Serif Pro"',
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },

    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
