require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Niru Maheswaranathan",
    description: "Niru Maheswaranathan's personal website.",
  },
  plugins: [
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
        ],
      }
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: process.env.GOATCOUNTER_ID,
      }
    },
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: process.env.GITHUB_API_TOKEN,
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
        whitelist: ['dark-mode', 'light-mode', 'w-2', 'w-3', 'w-4', 'w-6', 'h-2', 'h-3', 'h-4', 'h-6'],
        printRejected: false,
        develop: true,
        tailwind: true,
      }
    },
  ],
}
