import React from "react"
import { Link} from "gatsby"
import Img from "gatsby-image"
import "../../webflow_styles/symbols/productpreview.css"
function fix_image_path(image_path){
  return image_path.startsWith("../static/assets/") ? image_path.slice(17) : image_path
}
const ProductPreview = (props) => {
  return (
    <div className="div-shadow" key={props.key}>
      <Img fluid={props.img} />
      <div className="div-product-description">
        <h1 className="text-big">{props.title}</h1>
        <div className="label-prices color2">
          {props.price}
        </div>
        <p className="paragraph-regular">
          {props.text}
        </p>
        <Link to={props.link} className="button-regular w-button bck-color1">
          Ver Más
        </Link>
      </div>
    </div>
  );
};
export default ProductPreview;

