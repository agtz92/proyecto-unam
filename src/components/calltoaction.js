import React from "react"
import { Link } from "gatsby"
import Heading from "../components/heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function CallToAction(props) {
    return (
        <div className="div-call-to-action">
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Preguntas de Examen</Heading>
                <p className="par-call-to-action">Preguntas de examen para UNAM, IPN, UAEM. Prepárate para el examen de admisión en 2021! </p>
                <Link to="/categorias/preguntas-de-examen/" ><button className="button-call-to-action w-button">Ve a preguntas de examen</button></Link>
            </div>
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Cursos de Preparacion</Heading>
                <p className="par-call-to-action">Ve los mejores cursos de preparacion para examen de universidad. Seleccionamos para anunciar solo a los mejores.</p>
                <Link to="/categorias/mejores-cursos-de-preparacion-unam-ipn-uam-uaem/" ><button className="button-call-to-action w-button">Ve todas las Materias</button></Link>
            </div>
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Guías Oficiales</Heading>
                <p className="par-call-to-action">Aquí estamos juntando las guías oficiales para todas las universidades, puedes consultarlas directamente en este botón.</p>
                <Link to="/guias/" ><button className="button-call-to-action w-button">Ir a guías</button></Link>
            </div>
        </div>

    )
}