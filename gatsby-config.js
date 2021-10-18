module.exports = {
  siteMetadata: {
    siteUrl: "https://www.codecrook.dev",
    title: "the-mark-gatsby",
    description: "A practice project of creating a blog using Gatsby and Markdown"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }
  ],
};
