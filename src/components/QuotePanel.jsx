import React, { useEffect } from 'react';
import './QuotePanel.css';

const QuotePanel = ({ isOpen, onClose }) => {
    // Prevent body scroll when panel is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="quote-overlay" onClick={onClose}>
            <div className="quote-drawer" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="quote-header">
                    <h2>Get a Quote</h2>
                    <p>Tell us about your project and we'll get back to you soon.</p>
                </div>

                <form className="quote-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@company.com" />
                    </div>

                    <div className="form-group">
                        <label>Company</label>
                        <input type="text" placeholder="Your Company Ltd." />
                    </div>

                    <div className="form-group">
                        <label>Service Interest</label>
                        <select defaultValue="">
                            <option value="" disabled>Select a service...</option>
                            <option value="physical">Physical Security</option>
                            <option value="video">Video Surveillance</option>
                            <option value="software">Software Development</option>
                            <option value="it">IT Infrastructure</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Project Details</label>
                        <textarea placeholder="Briefly describe your requirements..." rows="4"></textarea>
                    </div>

                    <button type="submit" className="submit-btn" onClick={(e) => {
                        e.preventDefault();
                        alert("Quote request functionality would go here.");
                        onClose();
                    }}>
                        Send Request
                    </button>

                    <p className="privacy-note">
                        By submitting this form, you agree to our privacy policy.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default QuotePanel;
