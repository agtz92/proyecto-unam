import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
// Components
import { Link } from "gatsby"
export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <div
          style={{
            paddingTop: "10%",
            paddingBottom: "10%",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          <Heading color="dark" alignment="center">
            Error 404
          </Heading>
          <h2>
            Oops! La página que buscas no existe. Intenta navegar en nuestro
            sitio web para encontrar lo que buscas
          </h2>
          <Link to="/">
            <h2 style={{ textAlign: "center", color: "blue" }}>Ir a Inicio</h2>
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  )
}
