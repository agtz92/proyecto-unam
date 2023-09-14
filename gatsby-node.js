const path = require("path")
const _ = require("lodash")
//import to write in text file
const fs = require('fs')



//Función para eliminar problema de paths en gatsby image featured image y checar si la extension de imagen es soportada
function ext(url) {

  if (url != null) {
    // Remove everything to the last slash in URL
    url = url.substr(1 + url.lastIndexOf("/"));
    url = url.substr(1 + url.lastIndexOf("\\"));

    // Break URL at ? and take first part (file name, extension)
    url = url.split('?')[0];

    //check image extension
    let imgExtension = url.split('.')[1];
    //check if it exists
    let imgExists = './static/assets/' + url


    if (fs.existsSync(imgExists)) {
      //check if extension is valid
      //console.log(imgExists)
      if ((imgExtension !== 'jpg') && (imgExtension !== 'png') && (imgExtension !== 'jpeg')) {

        url = 'espanol.jpg';
      }

    } else {
      console.log("El pendejo de emiliano la cago con esta imagen", url)
      url = 'espanol.jpg';
    }


  }
  // Now we have only extension
  return url;
}





//formateando slug
function formatSlug(url) {
  url = url.toLowerCase();
  return url;
}



exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("./src/templates/blogTemplate.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const categoriaTemplate = path.resolve("./src/templates/categorias.js")

  

  //add filter: {fileAbsolutePath: {regex: "/blog/"}} to create new source file systems
  const result = await graphql(`
   {
  postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
              featuredimage
            }
          }
        }
      }
    
  tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
  categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categoria) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  // Create post detail pages
  posts.forEach(({ node }) => {
    if (['uso-de-s-c-y-z'].includes(node.frontmatter.slug)) {
      //console.log({ slug: node.frontmatter.slug, featuredimage: ext(node.frontmatter.featuredimage) })
    }
    createPage({

      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        //funcion para corregir path de featuredimage: 
        featuredimage: ext(node.frontmatter.featuredimage),
        slug: node.frontmatter.slug,
      },

    })
  })

  // Extract tag data from tags query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Extract tag data from categories query
  const categories = result.data.categoriesGroup.group

  // Make category pages
  categories.forEach(categoria => {
    //console.log({ categoria: categoria.fieldValue })
    createPage({
      path: `/categorias/${_.kebabCase(categoria.fieldValue)}/`,
      component: categoriaTemplate,
      context: {
        categoria: categoria.fieldValue,
      },
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    MarkdownRemark: {
      relatedPosts: {
        type: ['MarkdownRemark'],
        resolve: (source, args, context, info) => {
          // Ensure that source.frontmatter.tags is an array or set it to an empty array if it doesn't exist
          const tags = Array.isArray(source.frontmatter.tags)
            ? source.frontmatter.tags
            : [];

          if (tags.length === 0) {
            // If there are no tags, you can decide how to handle this case
            return []; // Return an empty array or handle it based on your logic
          }

          return context.nodeModel.runQuery({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                frontmatter: {
                  tags: {
                    in: tags, // Now tags is always an array
                  },
                },
              },
            },
            type: 'MarkdownRemark',
          });
        },
      },
    },
  };
  
  createResolvers(resolvers);
};
