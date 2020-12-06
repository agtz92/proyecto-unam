import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import Search from "../components/search"

// Components
import {Link} from "gatsby"
export default function Home() {
    return (

        <React.Fragment>
            <Layout>
                <div style={{paddingTop: "10%", paddingBottom: "10%", paddingLeft: "20%", paddingRight: "20%"}}>
                    <Heading color="dark" alignment="center">Busca un tema de tu interés</Heading>
                    <Search/>
                    <Link to="/"><h2 style={{textAlign: "center", color:"blue"}}>Ir a Inicio</h2></Link>
                </div>
            </Layout>
        </React.Fragment>
    )

}
