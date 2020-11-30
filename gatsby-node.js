const path = require("path")
const _ = require("lodash")

/*exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      # you may need to adapt this line depending on the node type and key
      # that you want to create the relationship for
      featuredimage: File @link(by: "relativePath")
    }`
  ]
  createTypes(typeDefs)
}*/

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
        createPage({
          
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
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
        createPage({
            path: `/categorias/${_.kebabCase(categoria.fieldValue)}/`,
            component: categoriaTemplate,
            context: {
                categoria: categoria.fieldValue,
            },
        })
    })
}