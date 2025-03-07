import React from 'react';
import './App.css'; // Ensure this CSS file contains the necessary styles

const StayWithUs = () => {
    return (
        <div>
            <h1>Stay With Us</h1>
                <div id="stay-with-us" className="woodroffe-section">
                    <p className="woodroffe-description">
                        Escape to the Woodroffe Arms in the heart of the Peak District, where rustic charm meets modern comfort. Our five luxury ensuite guest rooms, including three double and two twin rooms convertible to super kings, offer a serene retreat after a day of exploration. Wake up to stunning views of the Hope Valley, and enjoy contemporary amenities blended seamlessly with traditional aesthetics. Indulge in local flavors at our on-site restaurant, a cozy haven of culinary delights. Perfectly positioned for both adventurous trails and tranquil walks, the Woodroffe Arms is not just a stay, but an experience that connects you with the heart of the countryside. Discover the perfect blend of relaxation, comfort, and natural beauty with us.
                    </p>
                    <img src="/gallery/Fireplace.jpeg" alt="Fireplace" className="woodroffe-image" />
                </div>
        </div>
    );
};

export default StayWithUs;
