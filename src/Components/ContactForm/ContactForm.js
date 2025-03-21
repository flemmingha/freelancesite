import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import the Contact CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setSuccessMessage(response.data.message);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('There was an error submitting the form. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="contact-form-container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Contact</h1>
            <br></br>
            <p>You can either call at +45 20 89 40 86 or use the form below</p>
            <br></br>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
