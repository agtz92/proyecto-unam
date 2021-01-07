

module.exports = {
  siteMetadata: {
    title: `Antes del Examen | Temas resumidos para cualquier materia`,
    siteUrl: `https://www.antesdelexamen.com`,
    description: `Estudia antes de tu examen de Espanol, Geografia, Literatura, Biologia, Historia y mas!`,
  },
  plugins: [
     {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0529X1RN3D", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        /*gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },*/
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.antesdelexamen.com/',
        sitemap: 'https://www.antesdelexamen.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
          name: 'images',
          path: `${__dirname}/static/assets`,
          
               },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
     "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
              // exclude: ['featuredimage'],
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