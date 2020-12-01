import React from "react"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import Blockcontainer from "../components/blocksContainer"
import Layout from "../layouts/layout"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function Home({data}) {
  
  return (
    
    <React.Fragment>
    <Layout>
    <SimpleSlider/>
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <Link to="/categorias/"><Heading color="dark" >Encuentra temas resumidos de: </Heading></Link>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Español {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Español')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Literatura {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Literatura')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          { 
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Geografía {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Geografía')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Historia Universal {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Historia')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Historia de México {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Historia de México')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/"><h2 className="heading-categoria" style={{color:"black"}}>Ve todo en Biología {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Biología')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      </div>
      </Layout>
    </React.Fragment>

    
  )
  
}

export const query = graphql`
  query {
    
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
           historia: allImageSharp(filter: {fluid : {originalName: {eq: "historia.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
        espanol: allImageSharp(filter: {fluid: {originalName: {eq: "espanol.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
        literatura: allImageSharp(filter: {fluid: {originalName: {eq: "literatura.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
        historiamexico: allImageSharp(filter: {fluid: {originalName: {eq: "historiamexico.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
        geografia: allImageSharp(filter: {fluid: {originalName: {eq: "geografia.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
        biologia: allImageSharp(filter: {fluid: {originalName: {eq: "biologia.jpg"}}}) {
          edges {
            node {
              fluid {
                src
              }
            }
          }
        }
          
  }
`