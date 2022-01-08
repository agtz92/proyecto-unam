import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postblocklarge"
import InfoBlock from "../components/infoblock"
import CategoryHeader from "../components/categoryHeader"
import matmarkt from '../images/partners/matmarkt.jpg'
import corthw from '../images/partners/corthw.jpg'



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
  Química: require("../images/slider/quimica.jpg"),
  MejorescursosdepreparacionUNAMIPNUAMUAEM: require("../images/slider/cursosdepreparacion.jpg")
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
             <Heading color="dark" alignment="center">Te podría interesar</Heading>
            <li>
                <a href="https://www.matmarkt.com/productos"  rel="noopener ">
                    <InfoBlock title="MatMarkt" img={matmarkt} description="Mat Markt es una empresa dedicada a la fabricación, distribución y venta de tapetes de hule para uso industrial, comercial y residencial. ¡Da click para visitar el sitio web!"/>
                </a>
                <a href="https://www.corthw.com/productos"  rel="noopener ">
                    <InfoBlock title="Cortina Hawaiana Mx" img={corthw} description="Tiras de PVC armadas a la medida para protección del polvo, áreas de enfriamiento, separación de áreas, ahuyentar insectos, evitar chispas y todos los usos que necesites aquí los puedes encontrar! ¡Da click para visitar el sitio web!"/>
                </a>
                
            </li>
            <div style={{padding: "10px"}} className="parpost light">antesdelexamen es una página de internet gratuita con bancos de preguntas de examen para UNAM, IPN y todas las demás universidades más importantes de México. 
                    Tenemos bancos de preguntas por materia y por area. Bancos de preguntas Area 1, Bancos de preguntas Area 2, Bancos de preguntas area 3, Bancos de preguntas Area 4. Simulacros UNAM , IPN, 
                    UAM, UAEM. Guía UNAM 2021, Guía IPN 2021. <br></br>Agréganos en facebook buscando @antesdelexamen</div>
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