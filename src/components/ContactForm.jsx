import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            setIsSubmitting(false);
            return;
        }

        try {
            // Send to PHP backend
            // In development, we can't easily test PHP without a PHP server.
            // In production, send-mail.php will be at the root.
            const API_URL = import.meta.env.VITE_API_URL || '';
            // If running locally with `npm run dev`, this will verify the request is sent, 
            // but return 404/index.html unless we proxy or mock. 
            // For production, it just works.

            const response = await fetch(`${API_URL}/send-mail.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({
                    type: 'success',
                    message: data.message || 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: data.message || 'Something went wrong. Please try again or contact us directly at office@distechsol.com'
                });
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                type: 'error',
                message: 'Unable to send message. Please check your connection or contact us directly at office@distechsol.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatedSection className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows="6"
                        required
                    ></textarea>
                </div>

                {status.message && (
                    <div className={`form-status ${status.type}`}>
                        {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="spinner"></span>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </AnimatedSection>
    );
};

export default ContactForm;
