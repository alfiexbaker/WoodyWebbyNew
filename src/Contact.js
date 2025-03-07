import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        enquiry_type: 'business',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('');

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setFormData({
                    from_name: '',
                    from_email: '',
                    enquiry_type: 'business',
                    message: '',
                });
                setSubmissionStatus('Success! Your message has been sent.');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                setSubmissionStatus('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div id="contact-section">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            required
                            value={formData.from_name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email"
                            required
                            value={formData.from_email}
                            onChange={handleChange}
                        />
                        <select
                            name="enquiry_type"
                            value={formData.enquiry_type}
                            onChange={handleChange}
                        >
                            <option value="business">Business Enquiry</option>
                            <option value="stay">Stay with Us</option>
                            <option value="general">General Enquiry</option>
                        </select>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
                    </form>
                </div>
                <div className="map-and-details">
                    <div style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="300"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Castleton%20Rd,%20Hope,%20Hope%20Valley%20S33%206SB+(The%20Woodroffe%20Arms)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                    <div className="contact-details">
                        <p><strong>Address:</strong> 1 Castleton Rd, Hope, Hope Valley S33 6SB <br /><strong>Phone:</strong> 01433 623093</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
