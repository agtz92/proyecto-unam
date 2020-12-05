import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import Heading from "../components/heading"


export default function CategoryHeader(props) {
    return(
            
        <div className="category-header" style={{ backgroundImage: `url(${props.background})` }}>
            <div className="blackoverlay"></div>
            <div className="category-text">
            <Heading color="gold" alignment="center">Repasa para tu examen de {props.category}</Heading>
            <div className="text-block-2 white"><h2>{props.descripcion}</h2></div>
            </div>
        </div>

        
    ) 
}