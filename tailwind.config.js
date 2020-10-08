module.exports = {
  purge: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
        },
        background: {
          default: 'var(--bg-default)',
        },
        error: {
          default: 'var(--error-default)',
          primary: 'var(--error-primary)',
          secondary: 'var(--error-secondary)',
          ternary: 'var(--error-ternary)'
        },
        brand: {
          default: 'var(--brand-default)',
          secondary: 'var(--brand-secondary)',
        },
      },
    },

    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
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
}