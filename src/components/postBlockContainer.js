import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function PostBlockContainer(props) {
    return(
        <div id={props.name} className="category-holder">
            <div className="div-block-3">
                <h1 className="heading-blog-post">{props.name}</h1>
            </div>
            <div className="div-block-8">
                {props.children}
            </div>
        </div>
    ) 
}