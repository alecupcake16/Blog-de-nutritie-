import React from 'react';

const textStyle = {
    fontFamily: "'Cambria', serif", // Schimbă fontul utilizat
    fontSize: '50px', 
    fontWeight: 'bold',
    color: '#374151',
    fontStyle: 'italic',
    textTransform: 'capitalize', // Transformă prima literă din fiecare cuvânt în majusculă
    letterSpacing: '6px', 
    lineHeight: '1.4',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
};

const Hero = () => {
    return (
        <section id="home" className="h-[90vh] flex flex-col">
            {/* Partea de sus cu imaginea */}
            <div 
                className="flex-1 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(https://i.pinimg.com/564x/be/1c/16/be1c1691bf4e84ea8a1ff123b7173593.jpg)',
                  backgroundSize: 'stretch',
                  backgroundPosition: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%',
                  left: '0',
              }}
            ></div>
            
            {/* Partea de jos cu textul */}
            <div className="flex-1.2 bg-white-600 flex items-center justify-center p-7">
                <div className="text-center text-blue-600">
                    <h2 className="text-5xl font-bold">
                        Choose your <span style={textStyle}>Adventure</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;

