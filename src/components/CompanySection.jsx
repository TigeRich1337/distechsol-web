import React from 'react';
import AnimatedSection from './AnimatedSection';
import './CompanySection.css';

const CompanySection = () => {
    return (
        <section className="company-section" id="company">
            <div className="container">
                <div className="company-content">
                    <AnimatedSection className="company-text">
                        <h2 className="section-title text-gradient">About DisTechSol</h2>
                        <h3 className="company-subtitle">Your Partner in Security & Automation</h3>
                        <div className="company-description">
                            <p>
                                Distechsol is a premier technology integrator specializing in advanced automation and IT security.
                                Founded in 2020, we have established ourselves as a trusted provider of cutting-edge solutions,
                                including robust server infrastructure, scalable cloud services, and seamless IoT integration.
                            </p>
                            <p>
                                Our expertise extends to top-tier video surveillance systems powered by <strong>Nx Witness</strong> and <strong>Incoresoft</strong>,
                                as well as state-of-the-art access control from <strong>Suprema</strong>. We go beyond standard integration;
                                our team fuses deep engineering expertise with custom software development to solve the most intricate business
                                and industrial challenges. Dedicated to excellence, we serve clients across Azerbaijan, ensuring every project
                                is delivered with precision and future-ready innovation.
                            </p>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">2020</span>
                                <span className="stat-label">Founded</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="company-visual" delay={0.2}>
                        <div className="visual-circle"></div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
