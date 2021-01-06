import React from "react"
import { Link, graphql } from "gatsby"
// Components
import { Helmet } from "react-helmet"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import logoChico from "../images/logo_small.png"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import matmarkt from '../images/partners/matmarkt.jpg'
import corthw from '../images/partners/corthw.jpg'
import InfoBlock from "../components/infoblock"
// Utilities
import kebabCase from "lodash/kebabCase"
import Img from "gatsby-image"

function fix_image_path(image_path){
  return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
}

export default function Template({
  data// this prop will be injected by the GraphQL query below.
}) {
    console.log(data)
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const perro = "https://www.antesdelexamen.com/" + frontmatter.slug + "/";
    console.log(frontmatter.featuredimage);
    console.log(data.file)
    const split = String(frontmatter.featuredimage).split("\\");
    console.log("var= " + split[0]);
        return (
          
            <React.Fragment>
              <Helmet >
                <meta charSet="utf-8" />
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.short_description} />
                <script type="application/ld+json">
                  {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":\"${perro}\"
                  },
                  "headline": \"${frontmatter.title}\",
                  "description": \"${frontmatter.short_description}\",
                  "image": "https://www.antesdelexamen.com/assets/${ fix_image_path(frontmatter.featuredimage)}",  
                  "author": {
                    "@type": "Organization",
                    "name": "antesdelexamen.com"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "antesdelexamen",
                    "logo": {
                      "@type": "ImageObject",
                      "url": \"https://www.antesdelexamen.com/${logoChico}\"
                    }
                  },
                  "datePublished": \"${frontmatter.date}\",
                  "dateModified": \"${frontmatter.date}\"
                }
                `}
                </script>
              </Helmet>
            <Layout>
            <div className="blog-post-container">
                <div className="div-grey-post"></div>
                <div className="blog-post">
                  <Link key={frontmatter.categoria} to={`/categorias/${kebabCase(frontmatter.categoria)}/`} ><div className="div-tag marginbottom">{`< Regresar a ${frontmatter.categoria}`}</div></Link>
                    <div className="top-post">
                        <div className="featuredimage" ><img src={`/assets/${ fix_image_path(frontmatter.featuredimage)}`} loading="lazy" width="500" alt="" className="img-large-post"/>
                        {console.log("data file", data.file)}
                        {/* <Img fluid={data.file.childImageSharp.fluid}> */}
                    </div>
                        
                        <div className="short-description">
                          
                            <Heading color="dark">{frontmatter.title}</Heading>
                            <div className="parpost light">{frontmatter.date}</div>
                                <div className="tags-div">
                                    {frontmatter.tags.map((tag) => (
                                            <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}><div className="div-tag">{tag}</div></Link> 
                                    ))}</div>
                                
                                
                            <div><div className="parpost bold">Nivel de experiencia : {frontmatter.dificultad}</div></div>
                            <p className="parpost">{frontmatter.short_description}</p>
                        </div>
                    </div>
                    <div className="div-text-post" dangerouslySetInnerHTML={{ __html: html }}/>
                                      <Link key={frontmatter.categoria} to={`/categorias/${kebabCase(frontmatter.categoria)}/`} ><div className="div-tag marginbottom">{`< Regresar a ${frontmatter.categoria}`}</div></Link>

                </div>
                
                <div className="div-grey-post"></div>
                
            </div>
            <Heading color="dark" alignment="center">Te podría interesar</Heading>
            <li>
                <a href="https://www.matmarkt.com/"  rel="noopener norefferer">
                    <InfoBlock title="MatMarkt" img={matmarkt} description="Mat Markt es una empresa dedicada a la fabricación, distribución y venta de tapetes de hule para uso industrial, comercial y residencial. ¡Da click para visitar el sitio web!"/>
                </a>
                <a href="https://www.corthw.com/"  rel="noopener norefferer">
                    <InfoBlock title="Cortina Hawaiana Mx" img={corthw} description="Tiras de PVC armadas a la medida para protección del polvo, áreas de enfriamiento, separación de áreas, ahuyentar insectos, evitar chispas y todos los usos que necesites aquí los puedes encontrar! ¡Da click para visitar el sitio web!"/>
                </a>
                
            </li>
            </Layout>
            </React.Fragment>
        )
    
    
}

export const pageQuery = graphql`
  query($slug: String!, $featuredimage: String!) {
    markdownRemark(
      fileAbsolutePath: {regex: "/blog/"}
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
      }
    }
    file(relativePath: {eq: $featuredimage}) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
