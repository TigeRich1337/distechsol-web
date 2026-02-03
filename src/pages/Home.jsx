import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnersCarousel from '../components/PartnersCarousel';
import CompanySection from '../components/CompanySection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <PartnersCarousel />
            <CompanySection />
            <ServicesSection />
        </>
    );
};

export default Home;
