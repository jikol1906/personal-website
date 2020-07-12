/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
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
              variants: ["300","400", "700"],
            },
          ],
        },
      },
    },
  ],
}
