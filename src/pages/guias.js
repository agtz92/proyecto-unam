import React from "react"
import { Link} from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postblocklarge"
import Layout from "../layouts/layout"
import unam from "../images/UNAM.jpg"
import ipn from "../images/IPN.jpg"
import uam from "../images/uam.png"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function Home() {
  
  return (
    
    <React.Fragment> 
      <Helmet title="Guias UNAM IPN UAM 2022 GRATIS | Antesdelexamen.com">
                <meta name="description" content="Preparate para tu examen con las guias actualizadas 2021 para la UNAM"/>
      </Helmet>
    <Layout>
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
        <Heading color="dark" alignment="center">Guías para Universidades 2021</Heading>
        <li>
            <Link to={`/guia-ipn/`}>
                <PostBlockLarge title="Guia IPN 2021" img={ipn} nivel="Universidad" description="Guía de estudio IPN 2021. Guía más reciente para admisión al IPN."/>
            </Link>

            <Link to={`/guiaarea1unam/`}>
                <PostBlockLarge title="Guia Area 1 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 1 2021. Guía más reciente para Area 1 admisión de la UNAM."/>
            </Link>
            <Link to={`/guiaarea2unam/`}>
                <PostBlockLarge title="Guia Area 2 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 2 2021. Guía más reciente para Area 2 admisión de la UNAM."/>
            </Link>
            <Link to={`/guiaarea3unam/`}>
                <PostBlockLarge title="Guia Area 3 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 3 2021. Guía más reciente para Area 3 admisión de la UNAM."/>
            </Link>
            <Link to={`/guiaarea4unam/`}>
                <PostBlockLarge title="Guia Area 4 UNAM" img={unam} nivel="Universidad" description="Guía UNAM Area 4 2021. Guía más reciente para Area 4 admisión de la UNAM."/>
            </Link>
            <Link to={`/guia-uam/`}>
                <PostBlockLarge title="Guias para la UAM" img={uam} nivel="Universidad" description="Las 4 Guías UAM 2021. Guías más recientes para admisión UAM."/>
            </Link>
        </li>

      

      </div>
      </Layout>
    </React.Fragment>

    
  )
  
}
