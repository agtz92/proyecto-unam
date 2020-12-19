import React from "react"
import { Link } from "gatsby"
import Heading from "../components/heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function CallToAction(props) {
    return(
        <div className="div-call-to-action">
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Preguntas de Examen</Heading>
                <p className="par-call-to-action">Preguntas de examen para UNAM, IPN, UAEM. Prepárate para el examen de admisión en 2021! </p>
                <Link to="/categorias/preguntas-de-examen/" ><button className="button-call-to-action w-button">Ve a pregntas de examen</button></Link>
            </div>
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Todas las Materias Disponibles</Heading>
                <p className="par-call-to-action">Ve todas las materias que tenemos disponibles con preguntas y respuestas de examen. Tenemos una gran variedad de materias y todo el tiempo agregamos nuevas</p>
                <Link to="/categorias/" ><button className="button-call-to-action w-button">Ve todas las Materias</button></Link>
            </div>
            <div className="call-to-action">
                <Heading color="dark" alignment="center" size="medium">Colabora con Nosotros</Heading>
                <p className="par-call-to-action">Si tienes un tema que quisieras publicar, aquí te decimos como subirlo. Tu colaboración es muy importante para nosotros para seguir creciendo el proyecto</p>
                <Link to="/about/" ><button className="button-call-to-action w-button">¡Colabora ya!</button></Link>
            </div>
        </div>
        
    ) 
}