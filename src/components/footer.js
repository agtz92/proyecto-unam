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
                    style={{width:"70px", height:"45px", paddingTop:"5px"}}
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                    <div>
                    <h2 className="footer-heading">Todas las Materias</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/categorias/preguntas-de-examen/"  className="footer-link">Preguntas de Examen</Link></li>
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
                        <li ><Link  to="/about/"  className="footer-link">¿Quiénes Somos?</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Partners</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li><a className="footer-link" href="https://www.matmarkt.com/productos"  rel="noopener ">MatMarkt. Piso y tapetes de hule y PVC</a></li>
                        <li><a className="footer-link" href="https://www.corthw.com/productos"  rel="noopener ">Cortina Hawaiana. Cortinas Hawaianas de PVC</a></li>
                        <li><a className="footer-link" href="https://www.10datos.com"  rel="noopener ">10 datos curiosos sobre cientos de temas</a></li>
                        <li><a className="footer-link" href="https://www.antesdelauni.com"  rel="noopener ">Bancos de preguntas UNAM IPN UAM UAEM</a></li>
                        <li><a className="footer-link" href="https://www.3minread.com"  rel="noopener ">Lifestyle, Culture and more 3 min read articles</a></li>
                        <li><a className="footer-link" href="https://www.pmhule.com"  rel="noopener ">Fabricantes de hule y neopreno</a></li>
                        <li><a className="footer-link" href="https://www.sombrealo.com"  rel="noopener ">Velarias en Queretaro</a></li>
                    </ul>
                    </div>
                </div>
                <div className="text-bottom-footer">Copyright © 2022 antesdelexamen.com . Todos los derechos reservados.</div>
                <div className="text-bottom-footer">En este sitio se recolectan cookies utilizados para Google Analytics</div>
                </div>
        </footer>
    );
    
    }

