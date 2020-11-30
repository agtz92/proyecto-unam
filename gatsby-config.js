module.exports = {
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      //assets go above everything else to avoid failures when using gatsby-remark-relative-images
      resolve: `gatsby-source-filesystem`,
      options: {
          path: `${__dirname}/static/assets`,
          name: 'images',
               },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              //include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featuredimage'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categs`,
        path: `${__dirname}/cms/categorias`,
      },
    },*/
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://goofy-tereshkova-e4b6bf.netlify.app/',
        sitemap: 'https://goofy-tereshkova-e4b6bf.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`
  ]
}