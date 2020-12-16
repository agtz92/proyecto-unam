import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import matmarkt from '../images/partners/matmarkt.jpg'
import corthw from '../images/partners/corthw.jpg'
import InfoBlock from "../components/infoblock"
// Components
export default function Home() {
    return (

        <React.Fragment>
            <Layout>
            <Heading color="dark" alignment="center">Directorio de Negocios</Heading>
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
