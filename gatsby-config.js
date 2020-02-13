module.exports = {
  siteMetadata: {
    title: 'Niru Maheswaranathan',
    description: 'Niru Maheswaranathan\'s personal website.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
