/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Boris Grunwald - Softwaredeveloper`,
    description: `Frontend developer with experience in various web technologies`,
    author: `Boris Grunwald`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/styles/styles";`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Quicksand",
              variants: ["300", "400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
