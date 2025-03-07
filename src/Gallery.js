import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "./slick-carousel/slick/slick.css";
import "./slick-carousel/slick/slick-theme.css";
import './Gallery.css';

const Gallery = ({ source }) => {
    const [imageNames, setImageNames] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [animate, setAnimate] = useState(true); // New state for controlling animation

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(() => {
        fetch(source)
            .then(response => response.json())
            .then(data => {
                setImageNames(data);
            })
            .catch(error => {
                console.error("Error fetching the gallery JSON:", error);
            });

        const resizeListener = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", resizeListener);

        const timer = setTimeout(() => {
            setAnimate(false); // Stop the animation after a certain time
        }, 2000); // Adjust time to match the total duration of the CSS animation

        return () => {
            window.removeEventListener("resize", resizeListener);
            clearTimeout(timer); // Clear timer on unmount
        };
    }, [source]);

    return (
        <div className="gallery-container">
            {isMobile ? (
                <div className={`gallery-slider ${animate ? 'animate' : ''}`}>
                    <Slider {...settings}>
                        {imageNames.map((imageName, index) => (
                            <div key={index}>
                                <img className="gallery-slide" src={imageName} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="page-content">
                    {imageNames.map((imageName, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{ backgroundImage: `url(${imageName})` }}
                        >
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Gallery;
