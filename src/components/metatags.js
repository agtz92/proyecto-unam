
import React from 'react'
import { Helmet } from "react-helmet"
import logoChico from "../images/logo_small.png"
function fix_image_path(image_path) {
  return image_path.startsWith("../static/assets/")
    ? image_path.slice(17)
    : image_path
}
const Metatags = (props) =>{
return(
        <Helmet >
                <meta charSet="utf-8" />
                <title>"Bancos de preguntas de examen| {props.title}"</title>
                <meta name="description" content={props.short_description} />
                <script type="application/ld+json">
                  {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":\"${props.perro}\"
                  },
                  "headline": \"${props.title}\",
                  "description": \"${props.short_description}\",
                  "image": "https://www.antesdelexamen.com/assets/${ fix_image_path(props.featuredimage)}",  
                  "author": {
                    "@type": "Organization",
                    "name": "antesdelexamen.com"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "antesdelexamen",
                    "logo": {
                      "@type": "ImageObject",
                      "url": \"https://www.antesdelexamen.com/${logoChico}\"
                    }
                  },
                  "datePublished": \"${props.date}\",
                  "dateModified": \"${props.date}\"
                }
                `}
                </script>
        </Helmet>
);
}
export default Metatags;