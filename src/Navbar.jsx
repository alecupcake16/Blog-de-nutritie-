// src/Navbar.jsx
import React from 'react';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#f9fafb',
        color: '#3b82f6',
        padding: '10px 20px',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        top: '78px', // Ajustează valoarea în funcție de înălțimea header-ului
        left: '0',
        zIndex: '900',
    };

    return (
        <nav style={navbarStyle}>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '120px', padding: '20', margin: '20' }}>
                <li><a href="#home" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>ABOUT</a></li>
                <li><a href="#about" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>SERVICES</a></li>
                <li><a href="#recipes" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>RECIPES</a></li>
                <li><a href="#articles" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>ARTICLES</a></li>
                <li><a href="#contact" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;