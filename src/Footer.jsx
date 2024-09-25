import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white-600 text-blue-600 py-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Blog Nutriție. Toate Drepturile Rezervate.</p>
                <p>Urmărește-ne pe <a href="#" className="underline hover:text-gray-300">Rețelele Sociale</a> pentru sfaturi zilnice despre nutriție!</p>
                <p className="mt-4">Contact: <a href="mailto:contact@blognutritie.com" className="underline hover:text-gray-300">contact@blognutritie.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
