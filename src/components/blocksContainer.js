import React, { Component } from "react";
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'



export default class Blockcontainer extends Component {
    render() {
        //settings react slick
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const styles = {
            width:"100%",
            overflow: "visible",
            padding:"0 10px 0 10px"
        };
       
        return (
            <div style={styles}>
                <Slider style={styles}{...settings}>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}