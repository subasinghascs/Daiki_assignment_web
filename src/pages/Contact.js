import React from 'react';
import './Contact.css';
import backgroundImage from '../assets/premium_photo-1661902398022-762e88ff3f82.jpeg';


const Contact = () => {
    return (
        <div>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1 className='contact_1'>Contact Us</h1>
            </div>
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">Daiki is offering special scholarship programs for the 2018 intake</p>
                <form className="contact-form">
                    <label htmlFor="firstName">YOUR NAME</label>
                    <div className="name-inputs">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    <label htmlFor="comment">COMMENT</label>
                    <textarea id="comment" name="comment" placeholder="Enter your comment" required></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
                <h1>Daiki Lanka (Pvt) Ltd. (Daiki Group Japan)
                    24/9, 1st Lane, Gothami Road,
                    Borella, Colombo 08,
                    Sri Lanka</h1>
                <p>011 266 9050 / 076 655 1128 / 077 771 7215 / 076 858 3316</p>

            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.046478489249!2d79.87314467446687!3d6.921773493110107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b3f5e1f7d%3A0xd8f9c5f5e5e1e5a!2s24%2F9%2C%201st%20Lane%2C%20Gothami%20Rd%2C%20Colombo%2008%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1661902398022!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Daiki Lanka Location">
                </iframe>
            </div>
            <div className="contact-container">
                <p>Daiki Lanka (PVT) Ltd.</p>
            </div>
        </div>
    );
};

export default Contact;
