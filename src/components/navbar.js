import React, { Component } from "react";
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import { Link } from "gatsby"
import logoChico from "../images/logo_small.png"

var navStyle =
    {
        transform: `translate(0px, 0px)`,
        transition: `transform 400ms ease 0s`,

    };
export default class NavBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
    }

render(){
    return (


        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar w-nav ">
            <div className="divcontainernavbar">
                <Link to="/"><img
                    loading="lazy"
                    width="50px"
                    height="50px"
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                <nav role="navigation" className="w-nav-menu" >
                    <Link to="/" className="nav-link w-nav-link" activeClassName="w--current">Inicio</Link>
                    <Link to="/categorias/" className="nav-link w-nav-link" activeClassName="w--current">Categorías</Link>
                    <Link to="/informacion/" className="nav-link w-nav-link" activeClassName="w--current">Informacion</Link>
                    
                </nav>
                <div className={'w-nav-button ' + (this.state.isToggleOn ? "w--open" : "")} onClick={this.handleClick} aria-hidden="true" >
                    <div className="w-icon-nav-menu"></div>
                </div>

            </div>
            <div className={'w-nav-overlay mobileNav '  + (this.state.isToggleOn ? 'showing' : 'not-showing')} data-wf-ignore="" id="w-nav-overlay-0">
                <nav role="navigation" className="w-nav-menu" style={navStyle} data-nav-menu-open="">
                    <Link to="/" className="nav-link w-nav-link w--nav-link-open" activeClassName="w--current">Inicio</Link>
                    <Link to="/categorias/" className="nav-link w-nav-link w--nav-link-open" activeClassName="w--current">Categorías</Link>
                    <Link to="/informacion/" className="nav-link w-nav-link w--nav-link-open" activeClassName="w--current">Informacion</Link>
                </nav>
            </div>
        </div>

    );
}
}
