import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Slider1 from '../../../assets/Image/slider-1.png';


const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        beforeChange: (currentSlide, nextSlide) => {
            setActiveSlide(nextSlide)
        },
        appendDots: (dots) => (
            <div
                style={{
                    top: 0,
                    left: 0
                }}
            >
                <ul style={{ position: 'absolute', left: 0, top: '40%' }}> <li>{dots}</li> </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === activeSlide ?

                        {
                            width: "30px",
                            color: "black",
                            borderRight: "2px black solid"
                        }
                        :
                        {
                            width: "30px",
                            color: "#00000000",
                            borderRight: "2px white solid"
                        }
                }
            >
                0{i + 1}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true
                }
            }
        ]
    };
    return (
        <div className='px-4 lg:px-8'>
            <Slider {...settings}>
                <div>
                    <img src={Slider1} alt='banner_image' />
                </div>

                <div>
                    <img src={Slider1} alt='banner_image' />
                </div>

                <div>
                    <img src={Slider1} alt='banner_image' />
                </div>
            </Slider>
        </div>
    )
}

export default Banner