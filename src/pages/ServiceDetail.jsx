import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import biostationImg from '../assets/images/biostation3.png';
import uundzImg from '../assets/images/uundz-handle.jpg';
import softwareImg from '../assets/images/software-dev.png';
import networkImg from '../assets/images/network-infra.jpg';

const serviceDetails = {
    'physical-security': {
        title: 'Physical Security & Access Systems',
        subtitle: 'Biometric & Wireless Systems',
        image: biostationImg,
        description: 'A comprehensive approach to physical security, combining world-class biometrics with versatile intelligent locking systems. This unified ecosystem ensures secure, seamless, and scalable access control for any facility.',
        features: [
            'Multi-modal Authentication: Fingerprint, Face, RFID, Mobile, and QR',
            'Centralized web-based security protocols',
            'Wireless Electronic Locking: Handles and cylinders with BLE/RFID',
            'Mobile Access: Use smartphones as credentials via NFC/BLE',
            'Live Monitoring: Real-time event tracking and door status',
            'Anti-Passback & Zone Management',
            'Fire Alarm & Intrusion Interface',
            'GDPR Compliant Data Management'
        ],
        products: [
            {
                name: 'Biometric Terminals',
                description: 'AI-optimized facial recognition terminals with versatile credential support (Face, RFID, Mobile, QR) and VoIP Intercom.'
            },
            {
                name: 'Wireless Smart Locks',
                description: 'Battery-operated electronic door handles easily retrofittable to existing doors without drilling.'
            },
            {
                name: 'Outdoor Readers',
                description: 'Rugged fingerprint and RFID readers with IP67/IK10 rating for harsh environments.'
            },
            {
                name: 'Intelligent Controllers',
                description: 'Centralized biometric controllers securing data at the safe side of the door.'
            }
        ],
        benefits: [
            'Unified Management: Control both hard-wired readers and wireless locks from a single interface',
            'Flexibility: Solutions for every door type, from main entrances to server cabinets',
            'Scalability: Easily expand from a single door to multi-site enterprise systems',
            'Cost Efficiency: Wireless locks reduce cabling and installation costs significantly'
        ]
    },
    'video-analytics': {
        title: 'Video Surveillance & AI Analytics',
        subtitle: 'VMS & Intelligent Analytics',
        image: biostationImg, // Placeholder
        description: 'Empower your security with open-platform Video Management Systems (VMS) and advanced AI analytics. We deploy industry-leading solutions like Network Optix and Milestone, enhanced by Incoresoft\'s AI engines for city-scale monitoring and behavioral analysis.',
        features: [
            'Open Platform VMS: Seamless integration with thousands of camera models',
            'AI Object Detection: Differentiates humans, vehicles, and objects',
            'License Plate Recognition (LPR) & Traffic Analytics',
            'Behavioral Analytics: Directs loitering, intrusion, and public safety events',
            'Smart Search: Rapidly locate events across hours of footage',
            'Cloud & Edge Hybrid Architecture',
            'Scalable: From single-site retail to city-wide surveillance'
        ],
        products: [
            {
                name: 'Network Optix (Nx Witness)',
                description: 'A lightning-fast, lightweight, and user-friendly VMS designed for instant usability and deep developer integration.'
            },
            {
                name: 'Milestone Systems',
                description: 'The global standard for open-platform IP video management software (XProtect), offering limitless integration possibilities.'
            },
            {
                name: 'Incoresoft',
                description: 'Cutting-edge AI analytics engine for smart cities, featuring face recognition, traffic analysis, and safety monitoring.'
            }
        ],
        benefits: [
            'Proactive Security: AI detects threats before they escalate',
            'Operational Efficiency: Reduce investigation time with metadata search',
            'Flexibility: Avoid vendor lock-in with open-platform software',
            'Intelligence: Turn video data into actionable business insights'
        ]
    },
    'software-development': {
        title: 'Custom Software & Integrations',
        subtitle: 'Integration & Middleware',
        image: softwareImg,
        description: 'Maximize your ROI by integrating security hardware with your business operations. Our dev team utilizes standard APIs, SDKs, and custom middleware to bridge security data with ERP, HR, and Time & Attendance systems.',
        features: [
            'Access Control API Implementation (RESTful)',
            'Device SDK Integration',
            'Custom Middleware for HR/Payroll Sync',
            'Automated User Onboarding/Offboarding',
            'Custom Reporting & Analytics Dashboards',
            'Mustering & Emergency Evacuation Systems',
            'Visitor Management System Integrations',
            'Legacy System Modernization'
        ],
        services: [
            {
                name: 'HR & ERP Integration',
                description: 'Auto-sync employee data from SAP, Workday, or Oracle directly to access control panels.'
            },
            {
                name: 'Custom T&A Rules',
                description: 'Develop complex time and attendance logic tailored to unique shift patterns and labor laws.'
            },
            {
                name: 'Mobile App Development',
                description: 'Custom mobile interfaces for security guards, facility managers, or employees.'
            }
        ],
        benefits: [
            'Automation: Eliminate manual data entry and reduce errors',
            'Real-Time Sync: Changes in HR are immediately reflected in physical access rights',
            'Custom Fit: Solutions tailored exactly to your operational workflows',
            'Data Insights: Unlock value from your security data for business intelligence'
        ]
    },
    'it-infrastructure': {
        title: 'IT Infrastructure',
        subtitle: 'Enterprise Networking',
        image: networkImg,
        description: 'The backbone of your digital operations. We design and deploy robust, secure, and high-performance network infrastructures that ensure 24/7 business continuity.',
        features: [
            'Network Architecture & Design',
            'Enterprise Switching & Routing (L2/L3)',
            'Next-Gen Firewalls (NGFW) & Cybersecurity',
            'SD-WAN & Secure Remote Access (VPN)',
            'Wireless Site Surveys & High-Density Wi-Fi',
            'Server Virtualization & Storage Area Networks (SAN)',
            'Disaster Recovery & Business Continuity Planning',
            'Structured Cabling (Copper & Fiber)'
        ],
        partners: [
            {
                name: 'Cisco / Meraki',
                description: 'Cloud-managed IT and enterprise networking solutions.'
            },
            {
                name: 'Peplink',
                description: 'Unbreakable connectivity with SD-WAN and 5G/LTE load balancing.'
            },
            {
                name: 'Ubiquiti UniFi',
                description: 'Scalable and cost-effective networking for SMBs and campuses.'
            }
        ],
        benefits: [
            'Uptime: Redundant designs ensure your business never stops',
            'Security: Zero-trust architecture to protect critical assets',
            'Performance: Optimized traffic flow for heavy workloads (VoIP, Video)',
            'Manageability: Centralized dashboards for total network visibility'
        ]
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="text-gradient">Service Not Found</h1>
                    <Link to="/solutions" style={{ color: 'var(--accent-cyan)', marginTop: '20px', display: 'inline-block' }}>
                        ← Back to Solutions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)', paddingBottom: '60px' }}>
            <div className="container">
                {/* Header */}
                <AnimatedSection style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Link to="/solutions" style={{ color: 'var(--accent-cyan)', fontSize: '14px', textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
                        ← Back to Solutions
                    </Link>
                    <h1 className="text-gradient" style={{ fontSize: '48px', marginBottom: '10px' }}>{service.title}</h1>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {service.subtitle}
                    </p>
                </AnimatedSection>

                {/* Image and Description */}
                <AnimatedSection delay={0.1} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px',
                    marginBottom: '60px',
                    alignItems: 'center'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0, 81, 255, 0.05) 0%, rgba(0, 242, 255, 0.05) 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        border: '1px solid rgba(0, 242, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '300px'
                    }}>
                        <img src={service.image} alt={service.title} style={{
                            maxWidth: '100%',
                            maxHeight: '300px',
                            objectFit: 'contain',
                            filter: 'saturate(0.7) brightness(0.95) contrast(1.1) hue-rotate(-5deg) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.2))'
                        }} />
                    </div>
                    <div>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Overview</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px' }}>
                            {service.description}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Features */}
                <AnimatedSection delay={0.2} style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center' }}>Key Features</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                    }}>
                        {service.features.map((feature, index) => (
                            <div key={index} style={{
                                background: 'var(--bg-card)',
                                padding: '20px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px'
                            }}>
                                <span style={{ color: 'var(--accent-cyan)', fontSize: '20px' }}>✓</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Products/Services */}
                {(service.products || service.services || service.partners) && (
                    <AnimatedSection delay={0.3} style={{ marginBottom: '60px' }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center' }}>
                            {service.products ? 'Products' : service.services ? 'Services' : 'Partners'}
                        </h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {(service.products || service.services || service.partners).map((item, index) => (
                                <div key={index} style={{
                                    background: 'var(--bg-card)',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0, 242, 255, 0.1)'
                                }}>
                                    <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}>{item.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                )}

                {/* Benefits */}
                <AnimatedSection delay={0.4} style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center' }}>Benefits</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}>
                        {service.benefits.map((benefit, index) => (
                            <div key={index} style={{
                                background: 'linear-gradient(135deg, rgba(0, 81, 255, 0.08) 0%, rgba(0, 242, 255, 0.08) 100%)',
                                padding: '30px',
                                borderRadius: '16px',
                                border: '1px solid rgba(0, 242, 255, 0.2)',
                                textAlign: 'center'
                            }}>
                                <p style={{ color: 'var(--text-primary)', fontSize: '16px', lineHeight: '1.6' }}>
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection delay={0.5} style={{ textAlign: 'center' }}>
                    <div style={{
                        background: 'var(--bg-card)',
                        padding: '40px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 242, 255, 0.1)'
                    }}>
                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Interested in {service.title}?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                            Contact us to learn more about how we can help secure and optimize your business operations.
                        </p>
                        <Link to="/contacts" style={{
                            display: 'inline-block',
                            padding: '16px 40px',
                            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Get In Touch
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ServiceDetail;
