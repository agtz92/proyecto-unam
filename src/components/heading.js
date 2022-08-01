import React from "react"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import "../webflow_styles/symbols/heading.css"


export default function Heading(props) {
    /*return <h1 className={'heading ' + props.color + " " + props.alignment + " " + props.size}>{props.children}</h1>*/
    return <h1 className={`${props.alignment} ${" "} ${props.color} ${" "} ${props.extraclass} ${" "} ${props.size}`}>{props.children}</h1>;
}