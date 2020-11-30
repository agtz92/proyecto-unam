import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function CateogoriesBlock(props) {
    return(
            <div className="div-block-9" >
            <div className="div-block-10" style={{ backgroundImage: `url(${props.background})` }}></div>
                <div className="div-block-12">
                <h2 className="heading-blog-post">{props.name}</h2>
                <div className="div-block-11">
                        <div>Número de Tutoriales Disponibles: </div>
                        <div>{props.count}</div>
                </div>
                <div>{props.text}</div>
                </div>
            </div>
        
    ) 
}