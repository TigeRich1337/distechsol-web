import React, { useState, useRef, useEffect } from 'react';
import './LanguageSwitcher.css';

const languages = [
    {
        code: 'EN',
        label: 'English',
        flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath><g clipPath="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169" /><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" /><path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" /><path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" /><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" /></g></svg>
    },
    {
        code: 'RU',
        label: 'Русский',
        flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="20" height="13.33"><rect fill="#fff" width="9" height="3" /><rect fill="#d52b1e" y="3" width="9" height="3" /><rect fill="#0039a6" y="2" width="9" height="2" /></svg>
    },
    {
        code: 'AZ',
        label: 'Azərbaycan',
        flag: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="20" height="10"><rect width="1200" height="600" fill="#3f9c35" /><rect width="1200" height="400" y="0" fill="#ed2939" /><rect width="1200" height="200" y="0" fill="#00b5e2" /><circle cx="600" cy="300" r="90" fill="#fff" /><circle cx="620" cy="300" r="75" fill="#ed2939" /><path d="M680,300 l15,-50 l15,40 l45,-10 l-35,30 l15,45 l-40,-25 l-40,25 l15,-45 l-35,-30 l45,10 z" fill="#fff" /></svg>
    }
];

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
        // Here you would trigger the actual language change logic (i18n)
        console.log(`Language changed to ${lang.code}`);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button className="lang-btn" onClick={toggleDropdown}>
                <span className="lang-flag">{selectedLang.flag}</span>
                <span className="lang-code">{selectedLang.code}</span>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className={`lang-option ${selectedLang.code === lang.code ? 'active' : ''}`}
                            onClick={() => handleSelect(lang)}
                        >
                            <span className="lang-flag">{lang.flag}</span>
                            <span className="lang-label">{lang.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
