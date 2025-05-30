import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "./Img/logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img 
                        src={logo} 
                        alt="Company Logo" 
                        className="logo" 
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect fill='%234a6fa5' width='120' height='60'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='16' x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'%3EYour%20Brand%3C/text%3E%3C/svg%3E"
                        }}
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;