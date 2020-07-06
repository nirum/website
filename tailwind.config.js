module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '96': '24rem',
      },

      colors: {
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
      serif: ['"Source Serif Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
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