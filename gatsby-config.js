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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.TOKEN,
        graphQLQuery: `
          query {
            user(login: "nirum") {
              updatedAt
              followers {
                totalCount
              }
              repositories(first: 100, privacy: PUBLIC, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: OWNER) {
                edges {
                  node {
                    createdAt
                    pushedAt
                    updatedAt
                    forkCount
                    diskUsage
                    description
                    descriptionHTML
                    shortDescriptionHTML
                    nameWithOwner
                    name
                    isPrivate
                    id
                    languages(first: 10) {
                      edges {
                        node {
                          id
                          color
                          name
                        }
                      }
                    }
                    url
                    stargazers {
                      totalCount
                    }
                  }
                }
                totalCount
              }
              gists {
                totalCount
              }
            }
          }`
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "publications",
        path: `${__dirname}/src/publications`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
        whitelist: ['dark-mode', 'light-mode'],
        printRejected: false,
        develop: false,
        tailwind: true,
      }
    },
  ],
}