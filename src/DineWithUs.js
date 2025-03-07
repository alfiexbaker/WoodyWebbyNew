import React from 'react';
import './App.css';

const DineWithUs = () => {
    return (
        <div className="dine-with-us-container">
            <h1>Dine With Us</h1>
            <div id="dine-with-us" className="woodroffe-section">
                <p className="woodroffe-description">
                    Immerse yourself in a gastronomic adventure where each plate reflects the Peak District's seasonal tapestry. Our skilled chefs, advocates of the farm-to-fork movement, craft dishes that interweave rustic flavors with a touch of contemporary flair. They curate a menu that respects time-honored traditions while embracing the fresh, high-quality produce harvested from local fields. <br /><br />
                    As you dine under the ambient light cast by vintage lanterns and surrounded by history etched into stone and wood, our offerings aim to provide not just a meal, but a celebration of the Peak's pastoral heritage. Whether it's a hearty breakfast to fuel your day's adventures, a leisurely lunch, or a dinner that's a testament to the craft of good eating, we're dedicated to bringing you an authentic experience that captures the essence of our locale.
                </p>
                <img src="/gallery/WhatsOn.jpg" alt="Whats On" className="woodroffe-image woodroffe-image-reduced" />
            </div>
        </div>
    );
};

export default DineWithUs;
