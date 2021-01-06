import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import PostBlockLarge from "../components/postblocklarge"
import CategoryHeader from "../components/categoryHeader"


// Components
import { Link, graphql } from "gatsby"

const imageMapper ={
  Español: require("../images/slider/espanol.jpg"),
  Literatura: require("../images/slider/literatura.jpg"),
  Geografía: require("../images/slider/geografia.jpg"),
  HistoriaUniversal: require("../images/slider/historia.jpg"),
  HistoriadeMéxico: require("../images/slider/historiamexico.jpg"),
  Biología: require("../images/slider/biologia.jpg"),
  PreguntasdeExamen: require("../images/slider/preguntasdeexamen.jpg"),
  Química: require("../images/slider/quimica.jpg")
}

function fix_image_path(image_path){
  return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
}
const Categorias = ({ pageContext, data }) => {
    const { categoria } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoriaHeader = `${totalCount} tema${
        totalCount === 1 ? "" : "s"
        } en la materia de "${categoria}"`

    return (
      <React.Fragment>
        <Helmet >
                <meta charSet="utf-8" />
                <title>{`AntesDelExamen | Respuestas de examen de ${categoria}`}</title>
                <meta name="description" content={`Temas resumidos para estudiar antes del examen de ${categoria}`} />
        </Helmet>
        <Layout>
            <div>
            <CategoryHeader background={imageMapper[(categoria).split(' ').join('')]} category={categoria} descripcion={categoriaHeader} />  
            



            <ul className="list-posts">
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter
                    const { title } = node.frontmatter
                    const { short_description } = node.frontmatter
                    const { dificultad } = node.frontmatter
                    const { featuredimage } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={`/${slug}`}>
                                <PostBlockLarge title={title} img={`/assets/${fix_image_path(featuredimage)}`} nivel={dificultad} description={short_description}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */} 
            <Link to="/categorias" ><div className="div-tag marginbottom">Ve todas las categorias</div></Link>
        </div>
        </Layout>
        </React.Fragment>
    )
}

Categorias.propTypes = {
    pageContext: PropTypes.shape({
        categoria: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Categorias

export const pageQuery = graphql`
  query($categoria: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categoria: { in: [$categoria] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            dificultad
            featuredimage
            tags
            title
            categoria
            short_description
          }
        }
      }
    }
  }
`

/*{
                    childImageSharp {
                      fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                      }
                    }
}*/ 