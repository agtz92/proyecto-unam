import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"
import InfoBlock from "../components/infoblock"
import Heading from "../components/heading"
//assets
import matmarkt from "../images/partners/matmarkt.jpg"
import corthw from "../images/partners/corthw.jpg"

const BlogIndex = props => {
    const { data } = props
    const allPosts = data.allMarkdownRemark.edges

    const emptyQuery = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        const query = event.target.value
        const { data } = props

        const posts = data.allMarkdownRemark.edges || []

        const filteredData = posts.filter(post => {
            const { short_description, title, tags, categoria } = post.node.frontmatter
            return (
                short_description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) || categoria.toLowerCase().includes(query.toLowerCase()) ||
                (tags &&
                    tags
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase()))
            )
        })

        setState({
            query,
            filteredData,
        })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts

    return (
        <Layout >

            <Heading color="dark" alignment="center">Búsqueda Rápida</Heading>
            <p className="div-text-post">Escribe en el buscador para filtrar los temas que te interesan! <br></br> <bold>Puedes filtrar por título, categoría, tags o descripción.</bold> Ejemplo: Reacciones endotérmicas</p>

            <div className="searchBox" style={{ margin: '10px' }}>
                <input
                    className="search__input w-input w-input"
                    type="text"
                    aria-label="Search"
                    placeholder="Escribe para filtrar los resultados..."
                    onChange={handleInputChange}
                />
            </div>

            {posts.map(({ node }) => {
                const { excerpt } = node

                const { title, date, short_description, slug } = node.frontmatter
                return (
                    <article key={slug} style={{ margin: '10px' }}>
                        <header>

                            <Link to={slug}><Heading color="dark" size="small">{title}</Heading></Link>


                            <p>{date}</p>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: short_description || excerpt,
                                }}
                            />
                        </section>
                        <hr />
                    </article>
                )
            })}
            <Heading color="dark" alignment="center">
                Te podría interesar
            </Heading>
            <li>
                <a href="https://www.matmarkt.com/productos" rel="noopener ">
                    <InfoBlock
                        title="MatMarkt"
                        img={matmarkt}
                        description="Mat Markt es una empresa dedicada a la fabricación, distribución y venta de tapetes de hule para uso industrial, comercial y residencial. ¡Da click para visitar el sitio web!"
                    />
                </a>
                <a href="https://www.corthw.com/productos" rel="noopener ">
                    <InfoBlock
                        title="Cortina Hawaiana Mx"
                        img={corthw}
                        description="Tiras de PVC armadas a la medida para protección del polvo, áreas de enfriamiento, separación de áreas, ahuyentar insectos, evitar chispas y todos los usos que necesites aquí los puedes encontrar! ¡Da click para visitar el sitio web!"
                    />
                </a>
            </li>

        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            short_description
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            categoria
          }

        }
      }
    }
  }
`