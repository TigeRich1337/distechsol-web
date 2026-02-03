import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '60px' }}>
            <div className="container">
                <AnimatedSection className="contact-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '48px', marginBottom: '20px' }}>Get In Touch</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind or questions about our solutions?
                        We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
                    </p>
                </AnimatedSection>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
