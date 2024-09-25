import React from 'react';

const Header = () => {
    // Stiluri pentru header
    const headerStyle = {
        backgroundColor: '#f9fafb',
        color: '#3b82f6',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
    };

    // Stiluri pentru textul din header
    const textStyle = {
        fontFamily: "'Times New Roman', serif", // Schimbă fontul utilizat
        fontSize: '30px', 
        fontWeight: 'bold',
        fontStyle: 'italic',
        textTransform: 'capitalize', // Transformă prima literă din fiecare cuvânt în majusculă
        letterSpacing: '6px', 
        lineHeight: '1.4',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    };

    return (
        <header style={headerStyle}>
            <h1 style={textStyle}>Get Healthy</h1>
        </header>
    );
};

export default Header;
