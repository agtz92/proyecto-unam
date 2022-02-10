import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import Search from "../components/search"
import { Helmet } from "react-helmet"
import InfoBlock from "../components/infoblock"
import matmarkt from "../images/partners/matmarkt.jpg"
import corthw from "../images/partners/corthw.jpg"
// Components
import { Link } from "gatsby"
export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>"Bancos de preguntas de examen| Búsqueda Rápida"</title>
          <meta
            name="description"
            content="Busca un tema o un examen de manera inmediata"
          />
        </Helmet>
        <div
          className=""
          style={{
            paddingTop: "10%",
            paddingBottom: "10%",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          <Heading color="dark" alignment="center">
            Busca un tema de tu interés
          </Heading>
          <Search classNames="div-center-all-v" />
          <Link to="/">
            <h2 style={{ textAlign: "center", color: "blue" }}>Ir a Inicio</h2>
          </Link>
        </div>
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
    </React.Fragment>
  )
}
