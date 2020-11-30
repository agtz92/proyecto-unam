import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import info from '../images/info/info.jpg'
import partners from '../images/info/partners.jpg'
import InfoBlock from "../components/infoblock"
// Components
import {Link} from "gatsby"
export default function Home() {
    return (

        <React.Fragment>
            <Layout>
            <Heading color="dark" alignment="center">Información del Sitio</Heading>
            <li>
                <Link to="/partners/">
                    <InfoBlock title="Partners" img={partners} description="Estos negocios mexicanos hacen que este proyecto pueda seguir creciendo."/>
                </Link>
                <Link to="/privacidad/">
                    <InfoBlock title="Aviso de Privacidad" img={info} description="Consulta nuestra política de privacidad."/>
                </Link>
            </li>
            </Layout>
        </React.Fragment>
    )

}
