import React from 'react';
import '../components/ServicesSection.css';
import { motion } from 'framer-motion';

const projects = [
    {
        client: "SOCAR Polymer",
        category: "Industrial / Manufacturing",
        system: "Enterprise Access & Integration",
        device_count: "100+ Devices",
        desc: "Designed and deployed a large-scale biometric access control and time attendance system at the SOCAR Polymer industrial facility, ensuring complete security and attendance automation across the entire plant. The result was a secure, scalable, and fully integrated system managing hundreds of employees with automated HR data exchange.",
        details: [
            "47 Suprema XPass D2 RFID card readers across all perimeter and internal access points",
            "52 Suprema CoreStation central controllers for distributed door management",
            "BioStar 2 platform for centralized access control and reporting",
            "Integration with SOCAR’s internal 2HR system for real-time T&A synchronization",
            "Multi-zone and multi-role access rules with strict safety policies"
        ],
        tech: "Suprema CoreStation, XPass D2, BioStar 2"
    },
    {
        client: "Supreme Court of Azerbaijan",
        category: "Government",
        system: "High-Security Biometric Access",
        device_count: "18+ Terminals",
        desc: "Delivered and configured a high-security biometric access control and time attendance system for the Supreme Court of Azerbaijan, ensuring compliance with strict access protocols. The project ensured strict access regulation and seamless time tracking for one of the country’s most sensitive government institutions.",
        details: [
            "6 Suprema FaceStation F2 facial recognition terminals",
            "12 Suprema XPass 2 RFID card readers",
            "Advanced multi-zone access control via BioStar 2",
            "Role-based access rights for judges, staff, and visitors",
            "Full time attendance integration with overtime tracking"
        ],
        tech: "FaceStation F2, XPass 2, BioStar 2"
    },
    {
        client: "Ministry of Taxes & Finance",
        category: "Government",
        system: "Unified Inter-Agency Access",
        device_count: "15+ BioStations",
        desc: "Implemented a unified biometric access control and time attendance solution across two major governmental institutions — the Ministry of Taxes and the Ministry of Finance. This project enhanced the overall security posture and attendance discipline in both ministries while streamlining HR and access management processes.",
        details: [
            "15 Suprema BioStation 3 facial recognition terminals at entry points",
            "Full BioStar 2 configuration with centralized multi-building management",
            "Time attendance setup integrated with department-specific schedules",
            "Secure authentication and real-time monitoring for public sector employees",
            "Tailored access policies for ministries, departments, and VIP areas"
        ],
        tech: "BioStation 3, BioStar 2"
    },
    {
        client: "SOCAR Midstream",
        category: "Energy / Corporate",
        system: "Enterprise Access Control",
        device_count: "35+ Devices",
        desc: "Led the deployment of an enterprise-level biometric access control and time attendance system at SOCAR Midstream's corporate offices. The project resulted in a modern, secure, and auditable access and attendance system tailored to enterprise operations.",
        details: [
            "30 Suprema XPass D2 RFID card readers across key access points",
            "5 Suprema CoreStation units for centralized access management",
            "Integration of BioStar 2 platform for real-time access control",
            "Time & attendance configuration including shifts and overtime policies",
            "Department-level access restrictions and secure zone control"
        ],
        tech: "XPass D2, CoreStation, BioStar 2"
    },
    {
        client: "Azertrans",
        category: "Logistics",
        system: "Comprehensive Access & T&A",
        device_count: "20+ Terminals",
        desc: "Designed and implemented a full-featured biometric access control and time attendance solution for Azertrans, a major logistics and transport services provider. The solution ensured reliable, secure access management and streamlined workforce attendance tracking across the facility.",
        details: [
            "8 Suprema BioStation 3 facial recognition terminals",
            "8 Suprema BioEntry P2 fingerprint readers",
            "4 Suprema Secure I/O modules for secure door control",
            "BioStar 2 platform with access rights, time zones, and shift configurations",
            "Multi-zone access control with high security at perimeter and internal areas"
        ],
        tech: "BioStation 3, BioEntry P2, Secure I/O"
    },
    {
        client: "North West Construction",
        category: "Construction / Admin",
        system: "Biometric Access & Attendance",
        device_count: "12+ Devices",
        desc: "Delivered a reliable and modern biometric access control and time attendance system for North West Construction’s administrative office. The project improved security transparency and eliminated manual attendance processes for office staff.",
        details: [
            "8 Suprema BioStation 3 facial recognition terminals",
            "3 Suprema XPass 2 RFID card readers",
            "1 Suprema CoreStation controller for centralized access logic",
            "BioStar 2 software for full ACS + T&A configuration",
            "Shift-based time tracking with automated attendance logs"
        ],
        tech: "BioStation 3, XPass 2, CoreStation"
    },
    {
        client: "ATB Bank",
        category: "Banking",
        system: "Secure Biometric Solution",
        device_count: "10+ Terminals",
        desc: "Delivered a secure biometric access control and time attendance solution for ATB Bank using Suprema technologies. The project enhanced physical security at branch and office entry points, while automating attendance tracking across departments.",
        details: [
            "6 Suprema BioStation 3 facial recognition terminals",
            "4 Suprema BioEntry W2 fingerprint readers",
            "BioStar 2 software platform with advanced access zone configuration",
            "Centralized user management and access rights by department",
            "Integration with security policy and visitor management protocols"
        ],
        tech: "BioStation 3, BioEntry W2"
    },
    {
        client: "Lukoil Shahdeniz",
        category: "Energy / Offshore",
        system: "Offshore Access Control",
        device_count: "8+ Devices",
        desc: "Implemented a secure and modern access control system for Lukoil Shahdeniz’s offshore facility, utilizing Suprema hardware for biometric and RFID-based authentication. The project strengthened site access security and ensured precise personnel control in line with industrial safety standards.",
        details: [
            "4 Suprema BioStation 3 facial recognition terminals",
            "4 Suprema XPass 2 RFID card readers",
            "Configuration of BioStar 2 platform for centralized rights",
            "Multi-zone access rules and personnel tracking for safety",
            "Deployment at high-security access points"
        ],
        tech: "BioStation 3, XPass 2"
    },
    {
        client: "Azdent",
        category: "Healthcare / Commercial",
        system: "Facial Recognition Access",
        device_count: "Facility-wide",
        desc: "Implemented a Suprema-based biometric access control and time attendance system for Azdent, a leading dental equipment provider. The solution significantly improved security, streamlined attendance management, and reduced manual HR processes.",
        details: [
            "Deployment of facial recognition terminals at all entry points",
            "Configuration of BioStar 2 software for centralized management",
            "Time & attendance setup for accurate work-hour tracking",
            "User group creation, shift schedules, and access rights",
            "Training of internal HR and security teams"
        ],
        tech: "Suprema Facial Recognition, BioStar 2"
    },
    {
        client: "Baku Steel Company",
        category: "Manufacturing",
        system: "Compact Biometric Layout",
        device_count: "Compact Setup",
        desc: "Deployed a compact yet secure biometric access control and time attendance solution for Baku Steel Company using Suprema technology. The system provided streamlined access control with accurate attendance records for plant personnel.",
        details: [
            "2 Suprema BioStation 3 facial recognition terminals",
            "BioStar 2 platform with configured access zones",
            "Time & attendance tracking for shift-based workers",
            "Secure authentication at sensitive production areas",
            "Full setup and technical training"
        ],
        tech: "BioStation 3, BioStar 2"
    },
    {
        client: "Cinema+",
        category: "Entertainment",
        system: "Staff Management System",
        device_count: "Compact Setup",
        desc: "Implemented a compact and efficient biometric access control and time attendance solution for Cinema+ staff management. The system provided reliable and secure access for employees while simplifying timekeeping processes.",
        details: [
            "2 Suprema fingerprint readers (BioEntry series)",
            "Configuration of BioStar 2 platform for rights and logs",
            "Role-based access zones for staff and back-office areas",
            "Automated time attendance tracking with reporting tools"
        ],
        tech: "BioEntry, BioStar 2"
    }
];

const Projects = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-main)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Projects</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                        We serve major government, energy, and commercial sectors with verified high-security deployments.
                    </p>
                </motion.div>

                <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'left', alignItems: 'flex-start', padding: '40px 35px' }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    {project.category}
                                </div>
                                <div style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap' }}>
                                    {project.device_count}
                                </div>
                            </div>

                            <h3 style={{ fontSize: '24px', marginBottom: '8px', lineHeight: '1.2' }}>{project.client}</h3>
                            <h4 style={{ fontSize: '16px', color: '#aaa', marginBottom: '20px', fontWeight: '500' }}>{project.system}</h4>

                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                {project.desc}
                            </p>

                            {project.details && (
                                <ul style={{
                                    marginBottom: '20px',
                                    paddingLeft: '20px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '14px',
                                    lineHeight: '1.6'
                                }}>
                                    {project.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '8px' }}>{detail}</li>
                                    ))}
                                </ul>
                            )}

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', width: '100%', fontSize: '13px', color: '#888' }}>
                                <span style={{ color: 'white', fontWeight: '600' }}>Key Tech:</span> {project.tech}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
