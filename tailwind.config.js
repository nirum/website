module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '96': '24rem',
      },

      colors: {
        blue: {
          "050": "#EBF8FF",
          "100": "#D1EEFC",
          "200": "#A7D8F0",
          "300": "#7CC1E4",
          "400": "#55AAD4",
          "500": "#3994C1",
          "600": "#2D83AE",
          "700": "#1D6F98",
          "800": "#166086",
          "900": "#0B4F71",
        },
        gray: {
          "050": "#FCFCFA",
          "100": "#E8E6E1",
          "200": "#D3CEC4",
          "300": "#B8B2A7",
          "400": "#A39E93",
          "500": "#857F72",
          "600": "#625D52",
          "700": "#504A40",
          "800": "#423D33",
          "900": "#27241D",
        },
        foreground: {
          default: 'var(--fg-default)',
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          ternary: 'var(--fg-ternary)'
        },
        background: {
          default: 'var(--bg-default)',
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          ternary: 'var(--bg-ternary)'
        },
        error: {
          default: 'var(--error-default)',
          primary: 'var(--error-primary)',
          secondary: 'var(--error-secondary)',
          ternary: 'var(--error-ternary)'
        },
        brand: {
          default: 'var(--brand-default)',
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          ternary: 'var(--brand-ternary)'
        },
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"Segoe UI"', 'Roboto', '"Noto Sans"', 'sans-serif', 'Arial', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },

    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },

  },
  variants: {},
  plugins: [],
}