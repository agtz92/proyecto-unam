import React from "react"
import Heading from "./heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
//import Img from "gatsby-image"

function fix_image_path(image_path) {
    if (image_path != null) {
        return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
    } else {
        image_path = "logo_small.png";
    }
}

export default function InfoBlock(props) {
    return (
        <div className="div-large-post">
            <div className="div-img-large-post">
                <img src={fix_image_path(props.img)} loading="lazy" width="250" alt="" className="img-large-post" />
            </div>
            <div className="div-large-post-content">
                <Heading color="dark">{props.title}</Heading>
                <div>{props.description}</div>
            </div>
        </div>

    )
}