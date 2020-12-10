
module.exports = {
  siteMetadata: {
  siteUrl: `www.antesdelexamen.com`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'www.antesdelexamen.com/',
        sitemap: 'www.antesdelexamen.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
    {
      //assets go above everything else to avoid failures when using gatsby-remark-relative-images
      resolve: `gatsby-source-filesystem`,
      options: {
          path: `${__dirname}/src/images/slider`,
          name: 'images-slider',
               },
    },
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
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: 'balance',
              tokenize: 'forward',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.short_description',
            attributes: {
              encode: 'balance',
              tokenize: 'forward',
              threshold: 9,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'frontmatter.slug',
            store: true,
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
    
    `gatsby-plugin-netlify-cms`
    
  ]
}