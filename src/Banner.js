import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

const Banner = () => {
    const [showFullMessage, setShowFullMessage] = useState(true);
    const bannerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setShowFullMessage(window.innerWidth > 768);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Handle scrolling
        const handleScroll = () => {
            const headerHeight = document.querySelector('.App-header')?.offsetHeight || 110;
            const scrollPosition = window.scrollY;

            if (bannerRef.current) {
                if (scrollPosition <= headerHeight) {
                    // When at the top, position the banner below the header
                    bannerRef.current.style.position = 'absolute';
                    bannerRef.current.style.top = `${headerHeight}px`;
                } else {
                    // When scrolling down, make the banner sticky at the top
                    bannerRef.current.style.position = 'fixed';
                    bannerRef.current.style.top = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="booking-banner" ref={bannerRef}>
            {showFullMessage ? (
                <p>
                    <span className="banner-highlight">Book directly for the best room rates!</span>
                    Call us on <a href="tel:+441433623093">01433 623093</a> (during pub hours) or
                    text <a href="sms:+447921627483">07921 627483</a> (24/7)
                </p>
            ) : (
                <p>
                    <span className="banner-highlight">Best rates: book direct!</span><br />
                    Call: <a href="tel:+441433623093">01433 623093</a> or
                    Text: <a href="sms:+447921627483">07921 627483</a>
                </p>
            )}
        </div>
    );
};

export default Banner;