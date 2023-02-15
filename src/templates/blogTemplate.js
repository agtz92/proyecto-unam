import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import Backlinks from "../components/backlinks/backlinks"
import PostBlockLarge from "../components/postblocklarge"
//import logoChico from "../images/logo_small.png"
import showdown from "showdown"
import "../styles/normalize.css"
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
// Utilities
import kebabCase from "lodash/kebabCase"

import Metatags from "../components/metatags"



const converter = new showdown.Converter()
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, relatedPosts } = markdownRemark
  const perro = "https://www.antesdelexamen.com/" + frontmatter.slug + "/"
  //console.log({ data: data })
  return (
    <React.Fragment>
      <Metatags
        title={frontmatter.title}
        short_description={frontmatter.short_description}
        featuredimage={frontmatter.featuredimage}
        date={frontmatter.date}
        perro={perro}
      />

      <Layout>
        <div className="blog-post-container">
          <div className="div-grey-post"></div>
          <div className="blog-post">
            <Link
              key={frontmatter.categoria + Math.random()}
              to={`/categorias/${kebabCase(frontmatter.categoria)}/`}
            >
              <div className="div-tag marginbottom">{`< Regresar a ${frontmatter.categoria}`}</div>
            </Link>
            <Link
              key={frontmatter.categoria  + Math.random()}
              to={"/categorias/preguntas-de-examen/"}
            >
              <div className="div-tag marginbottom">
                Ve las preguntas de examen
              </div>
            </Link>
            <div className="parpost light">
              Tenemos bancos de preguntas UNAM, bancos de preguntas IPN, guía
              oficial UNAM gratis, guía oficial IPN gratis y muchos más recursos
              para tu examen de universidad gratuitos.
            </div>
            <div className="top-post">
              <div className="featuredimage">
                {" "}
                {/*<img src={`/assets/${ fix_image_path(frontmatter.featuredimage)}`} loading="lazy" width="500" alt="" className="img-large-post"/> */}
                {/*console.log("data file", data.file)*/}
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>

              <div className="short-description">
                <Heading color="dark">{frontmatter.title}</Heading>
                <div className="parpost light">{frontmatter.date}</div>
                <div className="tags-div">
                  {frontmatter.tags.map(tag => (
                    <Link key={tag + `tag` +  + Math.random()} to={`/tags/${kebabCase(tag)}/`}>
                      <div className="div-tag">{tag}</div>
                    </Link>
                  ))}
                </div>

                <div>
                  <div className="parpost bold">
                    Nivel de experiencia : {frontmatter.dificultad}
                  </div>
                </div>
                <p className="parpost">{frontmatter.short_description}</p>
              </div>
            </div>


            <div
              className="div-text-post"
              dangerouslySetInnerHTML={
                frontmatter.mk1
                  ? { __html: converter.makeHtml(frontmatter.mk1) }
                  : { __html: converter.makeHtml(frontmatter.categoria) }
              }
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={
                frontmatter.mk2
                  ? { __html: converter.makeHtml(frontmatter.mk2) }
                  : { __html: converter.makeHtml(frontmatter.categoria) }
              }
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={
                frontmatter.mk3
                  ? { __html: converter.makeHtml(frontmatter.mk3) }
                  : { __html: converter.makeHtml(frontmatter.categoria) }
              }
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={
                frontmatter.mk4
                  ? { __html: converter.makeHtml(frontmatter.mk4) }
                  : { __html: converter.makeHtml(frontmatter.categoria) }
              }
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={
                frontmatter.mk5
                  ? { __html: converter.makeHtml(frontmatter.mk5) }
                  : { __html: converter.makeHtml(frontmatter.categoria) }
              }
            />

            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <Link
              key={frontmatter.categoria  + Math.random()}
              to={`/categorias/${kebabCase(frontmatter.categoria)}/`}
            >
              <div className="div-tag marginbottom">{`< Regresar a ${frontmatter.categoria}`}</div>
            </Link>
            <Link
              key={frontmatter.categoria  + Math.random()}
              to={`/categorias/${kebabCase(frontmatter.categoria)}/`}
            >
              <div className="div-tag marginbottom">{`< Regresar a ${frontmatter.categoria}`}</div>
            </Link>
            <div className=''>
              <Heading color="dark">Temas relacionados</Heading>
              {relatedPosts?.map(({ frontmatter }) => {
                const { slug } = frontmatter
                const { title } = frontmatter
                const { short_description } = frontmatter
                const { dificultad } = frontmatter
                return (
                  <li key={title + Math.random()}>
                    <Link to={slug}>
                      <PostBlockLarge
                        title={title}
                        nivel={dificultad}
                        description={short_description}
                      />
                    </Link>
                  </li>
                )
              })}
            </div>
            <div className="parpost light">
              <Backlinks categoria={frontmatter.categoria} />
              antesdelexamen es una página de internet gratuita con bancos de
              preguntas de examen para UNAM, IPN y todas las demás universidades
              más importantes de México. Tenemos bancos de preguntas por materia
              y por area. Bancos de preguntas Area 1, Bancos de preguntas Area
              2, Bancos de preguntas area 3, Bancos de preguntas Area 4.
              Simulacros UNAM , IPN, UAM, UAEM. Guía UNAM 2021, Guía IPN 2021.{" "}
              <br></br>Agréganos en facebook buscando @antesdelexamen
            </div>
          </div>

          <div className="div-grey-post"></div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $featuredimage: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/blog/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        dificultad
        featuredimage
        tags
        title
        categoria
        short_description
        mk1
        mk2
        mk3
        mk4
        mk5
      }
      relatedPosts {
        frontmatter {
          slug
          title
          tags
          dificultad
          featuredimage
          date(formatString: "MM-DD-YYYY")
          short_description
        }
      }
    }
    file(relativePath: { eq: $featuredimage }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
