import React from 'react';
import './PartnersCarousel.css';

const logoModules = import.meta.glob('/src/assets/logos/*.{png,jpg,jpeg,svg}', { eager: true });

const partners = Object.entries(logoModules).map(([path, module]) => {
    const name = path.split('/').pop().replace(/\.[^/.]+$/, "").replace(/-/g, " ");
    return { name, logo: module.default };
});

const half = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, half);
const row2 = partners.slice(half);

const PartnersCarousel = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <h3 className="section-title text-center" style={{ fontSize: '24px', marginBottom: '40px' }}>Our Clients and Partners</h3>
            </div>

            {/* Row 1 */}
            <div className="carousel-track-container" style={{ marginBottom: '30px' }}>
                <div className="carousel-track">
                    {/* Double the list for seamless infinite scroll */}
                    {[...row1, ...row1].map((partner, index) => (
                        <div className="partner-logo" key={`row1-${index}`}>
                            <img
                                src={partner.logo}
                                alt={partner.name}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="carousel-track-container">
                <div className="carousel-track" style={{ animationDirection: 'reverse' }}>
                    {/* Double the list for seamless infinite scroll */}
                    {[...row2, ...row2].map((partner, index) => (
                        <div className="partner-logo" key={`row2-${index}`}>
                            <img
                                src={partner.logo}
                                alt={partner.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersCarousel;
