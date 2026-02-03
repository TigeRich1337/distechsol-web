import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import './HeroSection.css';
import heroBg from '../assets/images/hero-bg.png';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="hero-section">
            <motion.div
                className="hero-bg-parallax"
                style={{ backgroundImage: `url(${heroBg})`, y }}
            />
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <AnimatedSection className="hero-text-content">
                    <h1 className="hero-title">
                        <span className="block-reveal">Secure. Automate.</span>
                        <br />
                        <span className="text-gradient block-reveal delay-1">Innovate.</span>
                    </h1>
                    <p className="hero-subtitle block-reveal delay-2">
                        DISTECHSOL is your partner in Security, Automation, and IT Infrastructure.
                        Official distributor of global brands, serving Azerbaijan and the UAE since 2020.
                    </p>
                    <div className="hero-actions block-reveal delay-3">
                        <a href="#services" className="btn btn-hero">Explore Solutions</a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default HeroSection;
