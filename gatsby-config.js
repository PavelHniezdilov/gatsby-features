module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        auth: {
          username: "gnezdilov",
          password: "hniezdilovpavel"
        },
        entitiesArray: [
          {
            url: `http://gatsbytest.kit.trafficterminal.com/wp-json/wp/v2/posts`,
            method: "get",
            headers: {
              "Content-Type": "application/json"
            },
            name: `posts`,
          },
          {
            url: `http://gatsbytest.kit.trafficterminal.com/wp-json/template/v2/getAdvancedMenu1`,
            method: "get",
            headers: {
              "Content-Type": "application/json"
            },
            name: `getAdvancedMenu1`,
          }
        ]
      }
    }
  ],
}
