import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        
        emailjs.send('service_msmwunn', 'template_48lk5h5', {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }).then(() => {
            alert('Thank you for your message!');
        }, () => {
            alert('Oops! Something went wrong. Please try again later.');
        });
    };

    return (
        <form onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
