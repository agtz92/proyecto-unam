import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import PostBlock from "../components/postblock"
import CallToAction from "../components/calltoaction"
import Blockcontainer from "../components/blocksContainer"
import Layout from "../layouts/layout"
import Grid3x3 from "../components/wrappers/Grid3x3"
import Img from "gatsby-image"
import Container from "../components/wrappers/Container"
import "../styles/normalize.css"
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import "../webflow_styles/symbols/productpreview.css"
import "../webflow_styles/symbols/landing.css"



export default function Home({ data }) {
  return (
    <React.Fragment>
      <Helmet title="Temas resumidos para antes del examen | Inicio">
        <meta
          name="description"
          content="Preparate para tu examen en 5 minutos con nuestros temas resumidos para preparatoria y universidad"
        />
      </Helmet>
      <Layout>
      <div className="storepage sections wf-section">
            <div className="w-row">
                <div className="column left_column w-col w-col-6">
                    <div className="homepage_header">
                        ANTES<br></br>DEL<br></br>EXAMEN
                    </div>
                    <div className="text-block-17">PREGUNTAS DE EXAMEN Y TEMAS RESUMIDOS PARA ENTRAR A LA UNAM, IPN, UAM Y MÁS UNIVERSIDADES<br></br><br></br><br></br>¡TAMBIÉN TE FUNCIONAN PARA ESTUDIAR PARA TUS EXAMENES EN PREPARATORIA!
                    </div>
                </div>
                <div className="column frontpage_backgroundimage w-col w-col-6"><Img fluid={data.landing.childImageSharp.fluid} /></div>
            </div>
        </div>







        <Heading alignment="center" size="big">Preguntas de Examen</Heading>
        <Grid3x3
          products={
            <React.Fragment>

              <div className="div-shadow" key="01">
                <Img fluid={data.biologia.childImageSharp.fluid} />
                <div className="div-product-description">
                  <h1 className="text-big">Preguntas para Examen Biología</h1>
                  <div className="label-prices color2">

                  </div>
                  <p className="paragraph-regular">

                  </p>
                  <Link to={`/respuestas-unam-biologia`} className="button-regular w-button bck-color1">
                    Ver Más
                  </Link>
                </div>
              </div>
              <div className="div-shadow" key="02">
                <Img fluid={data.literatura.childImageSharp.fluid} />
                <div className="div-product-description">
                  <h1 className="text-big">Preguntas para Examen Literatura</h1>
                  <div className="label-prices color2">

                  </div>
                  <p className="paragraph-regular">

                  </p>
                  <Link to={`/examen-%20muestra-ipn-unam-uaem-literatura`} className="button-regular w-button bck-color1">
                    Ver Más
                  </Link>
                </div>
              </div>
              <div className="div-shadow" key="03">
                <Img fluid={data.historia.childImageSharp.fluid} />
                <div className="div-product-description">
                  <h1 className="text-big">Preguntas para Examen Historia</h1>
                  <div className="label-prices color2">

                  </div>
                  <p className="paragraph-regular">

                  </p>
                  <Link to={`/examen-unam-historia-mexico`} className="button-regular w-button bck-color1">
                    Ver Más
                  </Link>
                </div>
              </div>
              <div className="div-shadow" key="03">
                <Img fluid={data.geografia.childImageSharp.fluid} />
                <div className="div-product-description">
                  <h1 className="text-big">Preguntas para Examen Geografía</h1>
                  <div className="label-prices color2">

                  </div>
                  <p className="paragraph-regular">

                  </p>
                  <Link to={`/respuestas-de-examen-unam-uaem-ipn-de-geografia`} className="button-regular w-button bck-color1">
                    Ver Más
                  </Link>
                </div>
              </div>

            </React.Fragment>
          }
        />

        <Container><Link to="/categorias/preguntas-de-examen/" ><button style={{backgroundColor:"#fca311", color:"black", fontSize:"1.5em"}} className="button-call-to-action w-button">Ver todas las preguntas de examen</button></Link></Container>

        <CallToAction />
        <div style={{ marginLeft: "2%", marginRight: "2%" }}>
          <Link to="/categorias/">
            <Heading color="dark">
              Encuentra temas resumidos de todas las materias{" "}
            </Heading>
          </Link>

          <Link to="/categorias/">
            <h2 className="heading-categoria" style={{ color: "#003049" }}>
              Nuestros últimos temas de examen {">"}
            </h2>
          </Link>
          <Blockcontainer>
            {data.temas.edges.map(({ node }) => {
              return (
                <Link key={node.id} to={node.frontmatter.slug}>
                  <PostBlock
                    name={node.frontmatter.title}
                    text={node.frontmatter.short_description}
                    nivel={node.frontmatter.dificultad}
                    background={node.frontmatter.featuredimage}
                  />
                </Link>
              )
            })}
          </Blockcontainer>

        </div>
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    temas:allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
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
          excerpt
        }
      }
    }
    biologia: file(relativePath: { eq: "biology.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    literatura: file(relativePath: { eq: "espanol.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    historia: file(relativePath: { eq: "historiam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    geografia: file(relativePath: { eq: "geografiam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landing: file(relativePath: { eq: "landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100, fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
