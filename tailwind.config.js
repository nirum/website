module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#f7f6f3",
          DEFAULT: "#9b989d",
          dark: "#464541",
        },
        foo: {
          light: "#f9f9f9",
          DEFAULT: "#5f5f5f",
          dark: "#1e1e1d",
        },
      },
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
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
