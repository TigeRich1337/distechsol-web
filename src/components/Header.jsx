import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import QuotePanel from './QuotePanel';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleQuote = (e) => {
        e.preventDefault();
        setIsQuoteOpen(!isQuoteOpen);
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <img src={logo} alt="DisTechSol" />
                    </Link>

                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <span className="nav-link">Company</span>
                                <div className="dropdown-menu">
                                    <Link to="/#about" className="dropdown-item">About Us</Link>
                                    <Link to="/#services" className="dropdown-item">Our Services</Link>
                                    <Link to="/contacts" className="dropdown-item">Leadership</Link>
                                    <Link to="/contacts" className="dropdown-item">Careers</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="/solutions" className="nav-link">Solutions</Link>
                                <div className="dropdown-menu wide">
                                    <div className="dropdown-col">
                                        <h4>Physical Security</h4>
                                        <Link to="/service/physical-security" className="dropdown-item">Biometric Access Control</Link>
                                        <Link to="/service/physical-security" className="dropdown-item">Intelligent Locking</Link>
                                    </div>
                                    <div className="dropdown-col">
                                        <h4>Digital Security & AI</h4>
                                        <Link to="/service/video-analytics" className="dropdown-item">Video Surveillance (VMS)</Link>
                                        <Link to="/service/video-analytics" className="dropdown-item">AI Analytics</Link>
                                    </div>
                                    <div className="dropdown-col">
                                        <h4>Tech Services</h4>
                                        <Link to="/service/software-development" className="dropdown-item">Software Development</Link>
                                        <Link to="/service/it-infrastructure" className="dropdown-item">IT Infrastructure</Link>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>

                            <li className="nav-item"><Link to="/contacts" className="nav-link">Contact Us</Link></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button className="btn quote-btn" onClick={toggleQuote}>Get a quote →</button>
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>

            <QuotePanel isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
};

export default Header;
