import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import PostBlockLarge from "../components/postblocklarge"
import Heading from "../components/heading"
import InfoBlock from "../components/infoblock"
import matmarkt from '../images/partners/matmarkt.jpg'
import corthw from '../images/partners/corthw.jpg'

// Components
import { Link, graphql } from "gatsby"

function fix_image_path(image_path){
    return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
}


const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } con la etiqueta "${tag}"`

    return (
        <React.Fragment>
            <Helmet >
                <meta charSet="utf-8" />
                <title>{`AntesDelExamen | Temas de examen relacionado con ${tag}`}</title>
                <meta name="description" content={`Temas con la etiqueta ${tag}`} />
        </Helmet>
        <Layout>
            <div>
            <h1>{tagHeader}</h1>
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
            <Link to="/tags" ><div className="div-tag marginbottom">Ve todos los tags</div></Link>

            <div style={{padding:"10px"}}>
                <p>En esta página, podrás encontrar todos los temas que tenemos relacionados con la palabra clave {tag}.
             Todos nuestros resumenes de examen y bancos de preguntas para examen son ideales para estudiar antes de tu examen. 
             Ya sea para prepararte para la universidad o en preparatoria.
            Si la etiqueta {tag} no es lo que estás buscando, te recomendamos que busques dentro de nuestras 
            <Link to="/categorias"> categorías</Link> y busques dentro de nuestro contenido algo que sea relevante para ti. También te invitamos a usar nuestro <Link to="/search">buscador </Link> 
            donde podrás acceder de una manera mucho más rápida a nuestro contenido.</p>
            </div>
            <Heading color="dark" alignment="center">Te podría interesar</Heading>
            <li>
                <a href="https://www.matmarkt.com/productos"  rel="noopener ">
                    <InfoBlock title="MatMarkt" img={matmarkt} description="Mat Markt es una empresa dedicada a la fabricación, distribución y venta de tapetes de hule para uso industrial, comercial y residencial. ¡Da click para visitar el sitio web!"/>
                </a>
                <a href="https://www.corthw.com/productos"  rel="noopener ">
                    <InfoBlock title="Cortina Hawaiana Mx" img={corthw} description="Tiras de PVC armadas a la medida para protección del polvo, áreas de enfriamiento, separación de áreas, ahuyentar insectos, evitar chispas y todos los usos que necesites aquí los puedes encontrar! ¡Da click para visitar el sitio web!"/>
                </a>
                
            </li>
            
        </div>
        </Layout>
        </React.Fragment>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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