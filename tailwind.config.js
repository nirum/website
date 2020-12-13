const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
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
    colors: {
      coolgray: colors.coolGray,
      gray: colors.gray,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.lightBlue,
      indigo: colors.indigo,
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
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
