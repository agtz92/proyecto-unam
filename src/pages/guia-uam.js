import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postblocklarge"
import Layout from "../layouts/layout"
import guia from "../images/guias/IPN2021.pdf"
import unam from "../images/UNAM.jpg"
import ipn from "../images/IPN.jpg"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function Home() {
  
  return (
    
    <React.Fragment> 
      <Helmet title="Temas resumidos para antes del examen | Guias UNAM 2021">
                <meta name="description" content="Preparate para tu examen con las guias actualizadas 2021 para el IPN"/>
      </Helmet>
    <Layout>
    <div style={{margin: "2%"}}>
        <Heading color="dark" alignment="center">Guías UAM 2021</Heading>
        <h2>En esta página puedes encontrar las guías más recientes de la UAM. Da click en el botón para descargarlas</h2>
        <p>Arquitectura, Diseño, Diseño de la Comunicación Gráfica, Diseño Industrial, Planeación Territorial</p>
        <a href="https://www.admision.uam.mx/guias/uam_guia_cad.pdf"><div className="div-tag">Descargar Guía CAD</div></a>
        <p>Agronomía, Bilogía, Medicina, Enfermería, Química y más</p>
        <a href="https://www.admision.uam.mx/guias/uam_guia_cbs.pdf"><div className="div-tag">Descargar Guía CBS</div></a>
        <p>Administración, Derecho, Economía, Filosofía, Psicología y más</p>
        <a href="https://www.admision.uam.mx/guias/uam_guia_csh.pdf"><div className="div-tag">Descargar Guía CSH</div></a>
        <p>Ingenierías, Física, Computación y más</p>
        <a href="https://www.admision.uam.mx/guias/uam_guia_cbi.pdf"><div className="div-tag">Descargar Guía CBI</div></a>
        <Heading color="gold" alignment ="left">Te puede interesar también</Heading>
        <li>
            <Link to={`/guiaarea1unam/`}>
                <PostBlockLarge title="Guia Area 1 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 1 2021. Guía más reciente para Area 1 admisión de la UNAM."/>
            </Link>
            <Link to={`/guiaarea2unam/`}>
                <PostBlockLarge title="Guia Area 2 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 2 2021. Guía más reciente para Area 2 admisión de la UNAM."/>
            </Link>
            <Link to={`/guiaarea3unam/`}>
                <PostBlockLarge title="Guia Area 3 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 3 2021. Guía más reciente para Area 3 admisión de la UNAM."/>
            </Link>
        </li>
      </div>
      </Layout>
    </React.Fragment>

    
  )
  
}
