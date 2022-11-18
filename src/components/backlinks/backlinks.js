import React from "react";

const Backlinks = props => {
    console.log(props.categoria)
    return (
        <React.Fragment>
            <ul className="" >
                {(props.categoria != "Español" && props.categoria != "Historia de México" && props.categoria != "Geografía") ?
                     <React.Fragment>
                        <li><a  href="https://www.matmarkt.com/productos/antiderrapantes" target="_blank" rel="noopener">Piso antiderrapante de hule</a></li>
                        <li><a  href="https://www.corthw.com/productos" target="_blank" rel="noopener">PVC Transparente</a></li>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <li><a  href="https://www.10datos.com/10-cabañas-sin-salir-de-querétaro/" target="_blank" rel="noopener">Cabañas en Querétaro</a></li>
                        <li><a  href="https://www.3minread.com/broadway-show-review-harry-potter-and-the-cursed-child/" target="_blank" rel="noopener">Harry Potter Broadway Review</a></li>
                    </React.Fragment>
                }
            </ul>
        </React.Fragment>
    );

}

export default Backlinks;