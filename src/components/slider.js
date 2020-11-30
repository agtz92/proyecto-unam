import React, { Component } from "react";
import Slider from "react-slick";
import Heading from "./heading"
import bg1 from '../images/slider/asar.jpg'
import bg2 from '../images/slider/pesca.jpg'
import bg3 from '../images/slider/acampar.jpg'
import bg4 from '../images/slider/carpinteria.jpg'
import bg5 from '../images/slider/cocinar.jpg'
import bg6 from '../images/slider/cocteleria.jpg'
import bg7 from '../images/slider/jardineria.jpg'
import { Link } from "gatsby"
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
                            to="/categorias/asar/"
                            background={bg[0]}
                            title="¿Cómo asar en parrilla?"
                            text="LOREM IPSUM MOTHERFUCKER"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/pesca/"
                            background={bg[1]}
                            title="¿Cómo Pescar?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/acampar/"
                            background={bg[2]}
                            title="¿Cómo acampar?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/carpinteria/"
                            background={bg[3]}
                            title="¿Cómo hacer carpinteria?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/cocinar/"
                            background={bg[4]}
                            title="¿Cómo cocinar?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/cocteleria/"
                            background={bg[5]}
                            title="¿Cómo hacer coctéles?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <Slide
                            to="/categorias/jardineria/"
                            background={bg[6]}
                            title="¿Cómo hacer jardinería?"
                            text="LOREM IPSUM MOTHERFUCKERsss"
                        />
                    </React.Fragment>
                </Slider>
            </div>
        );
    }
}