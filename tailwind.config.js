module.exports = {
  theme: {
    extend: {
      screens: {
        "dark-mode": {raw: '(prefers-color-scheme: dark)'}
      },
      spacing: {
        '72': '18rem',
        '96': '24rem',
      }
    },

    colors: {
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
      brand: {
        "lightest": "#8BD3F7",
        "lighter": "#3994C1",
        "default": "#1D6F98",
        "darker": "#166086"
      },
      white: '#FFFFFF',
    },

    fontFamily: {
      sans: ['"Source Sans Pro"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"Segoe UI"', 'Roboto', '"Noto Sans"', 'sans-serif', 'Arial', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },

    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
    },

  },
  variants: {},
  plugins: [],
}