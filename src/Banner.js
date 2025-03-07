import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    const [showFullMessage, setShowFullMessage] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowFullMessage(window.innerWidth > 768);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="booking-banner">
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