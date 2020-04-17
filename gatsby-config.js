module.exports = {
  siteMetadata: {
    title: "Niru Maheswaranathan",
    description: "Niru Maheswaranathan's personal website.",
  },
  plugins: [
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/blog`,
        name: "blog",
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/publications`,
        name: "publications",
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      }
    },
  ],
}