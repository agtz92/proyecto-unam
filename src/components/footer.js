import React from "react"
import { Link } from "gatsby"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import logoChico from "../images/logo_small.png"

export default function Footer() {
    
    return(
        <footer id="footer" className="footer">
            <div className="container w-container">
                <div className="footer-flex-container">
                <Link to="/"><img
                    loading="lazy"
                    width="auto"
                    height="50px"
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                    <div>
                    <h2 className="footer-heading">Todas las categorías</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/categorias/espanol/"  className="footer-link">Temas resumidos de Español</Link></li>
                        <li ><Link  to="/categorias/literatura/"  className="footer-link">Temas resumidos de Literatura</Link></li>
                        <li ><Link  to="/categorias/geografia/"  className="footer-link">Temas resumidos de Geografía</Link></li>
                        <li ><Link  to="/categorias/historia-universal/"  className="footer-link">Temas resumidos de Historia Universal</Link></li>
                        <li ><Link  to="/categorias/historia-de-mexico/"  className="footer-link">Temas resumidos de Historia de México</Link></li>
                        <li ><Link  to="/categorias/biologia/"  className="footer-link">Temas resumidos de Biología</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Información</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/privacidad/"  className="footer-link">Política de Privacidad</Link></li>
                        <li ><Link  to="/partners/"  className="footer-link">Directorio de Negocios</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Información Extra</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/about/"  className="footer-link">¿Quiénes Somos?</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="text-bottom-footer">Copyright © 2020 soy-nuevo.com . Todos los derechos reservados.</div>
                <div className="text-bottom-footer">Texto de partner Amazon</div>
                </div>
        </footer>
    );
    
    }

