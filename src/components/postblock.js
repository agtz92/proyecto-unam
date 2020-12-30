import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"

function fix_image_path(image_path){
    return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
  }

export default function PostBlock(props) {
    return(
            <div className="div-block-9" >
            <div className="div-block-10" style={{ backgroundImage: `url(/assets/${fix_image_path(props.background)})` }}></div>
                <div className="div-block-12">
                <h1 className="heading-blog-post">{props.name}</h1>
                <div className="div-block-11">
                        <div>Nivel: </div>
                        <div>{props.nivel}</div>
                </div>
                
                {/*<div>{props.text}</div>*/}
                </div>
            </div> 
        
    ) 
}