import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postblocklarge"
import Layout from "../layouts/layout"
import guia from "../images/guias/GuiaArea2.pdf"
import unam from "../images/UNAM.jpg"
import "../styles/normalize.css"
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"

export default function Home() {
  return (
    <React.Fragment>
      <Helmet title="Temas resumidos para antes del examen | Guias UNAM 2021">
        <meta
          name="description"
          content="Preparate para tu examen con las guias actualizadas 2021 para la UNAM"
        />
      </Helmet>
      <Layout>
        <div style={{ margin: "2%" }}>
          <Heading color="dark" alignment="center">
            Guías para Area 2 UNAM
          </Heading>
          <h2>
            En esta página puedes encontrar la guía más reciente publicada por
            la UNAM. Da click en el botón para descargarla
          </h2>
          <a href={guia} download>
            <div className="div-tag">Descargar Guía</div>
          </a>
          <Heading color="gold" alignment="left">
            Te puede interesar también
          </Heading>
          <li>
            <Link to={`/guiaarea1unam/`}>
              <PostBlockLarge
                title="Guia Area 1 UNAM"
                img={unam}
                nivel="Universidad"
                description="Guía UNAM Area 1 2021. Guía más reciente para Area 1 admisión de la UNAM."
              />
            </Link>
            <Link to={`/guiaarea3unam/`}>
              <PostBlockLarge
                title="Guia Area 3 UNAM"
                img={unam}
                nivel="Universidad"
                description="Guía UNAM Area 3 2021. Guía más reciente para Area 3 admisión de la UNAM."
              />
            </Link>
            <Link to={`/guiaarea4unam/`}>
              <PostBlockLarge
                title="Guia Area 4 UNAM"
                img={unam}
                nivel="Universidad"
                description="Guía UNAM Area 4 2021. Guía más reciente para Area 4 admisión de la UNAM."
              />
            </Link>
          </li>
        </div>
      </Layout>
    </React.Fragment>
  )
}
