import React, { Component } from "react";
import { Link } from "gatsby"
import Slider from "react-slick";
import Heading from "./heading"
import bg1 from '../images/slider/espanol.jpg'
import bg2 from '../images/slider/literatura.jpg'
import bg3 from '../images/slider/geografia.jpg'
import bg4 from '../images/slider/historia.jpg'
import bg5 from '../images/slider/historiamexico.jpg'
import bg6 from '../images/slider/biologia.jpg'
import bg7 from '../images/slider/jardineria.jpg'

import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'


const bg = [bg1,bg2,bg3,bg4,bg5,bg6,bg7];


export default class SimpleSlider extends Component{
    render() {
        //settings react slick
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        };
        //rendering of slider
        const Slide = props => (

            <div style={{ backgroundImage: `url(${props.background})` }} className="collection-item w-dyn-item">
                <Link to={props.to} className="linkblock w-inline-block">
                    <div className="blackoverlay"></div>
                    <div className="divheading">
                        <div className="w-embed">
                            <Heading color="gold">{props.title}</Heading>
                        </div>
                    </div>
                    <div className="divheading text">
                        <div className="text-block">{props.text}</div>
                    </div>
                </Link>
            </div>

        );
        return (
            <div>
                <Slider {...settings}>
                    <React.Fragment>
                        <Slide
                            to="/categorias/espanol/"
                            background={bg[0]}
                            title="Español"
                            text="Temas resumidos para tu examen de Español. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/literatura/"
                            background={bg[1]}
                            title="Literatura"
                            text="Temas resumidos para tu examen de Literatura. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/geografia/"
                            background={bg[2]}
                            title="Geografía"
                            text="Temas resumidos para tu examen de Geografía. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/historia-universal/"
                            background={bg[3]}
                            title="Historia Universal"
                            text="Temas resumidos para tu examen de Historia Universal. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/historia-de-mexico/"
                            background={bg[4]}
                            title="Historia de México"
                            text="Temas resumidos para tu examen de Historia de México. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/biologia/"
                            background={bg[5]}
                            title="Biología"
                            text="Temas resumidos para tu examen de Biología. Prepárate en 5 minutos y aprueba tu examen"
                        />
                    </React.Fragment>
                </Slider>
            </div>
        );
    }
}
