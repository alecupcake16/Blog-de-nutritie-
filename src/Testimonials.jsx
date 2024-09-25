import React from 'react';

const textStyle = {
    fontFamily: "'Cambria', serif",
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#374151',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    letterSpacing: '6px',
    lineHeight: '1.4',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
}

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-100 text-blue-600">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Partea stângă cu poza */}
                    <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                        <img 
                            src="https://i.pinimg.com/474x/4c/7b/0b/4c7b0b13847850b4100702bfd2c403f9.jpg" 
                            alt="Description of the image" 
                            className="rounded-lg shadow-md"
                            style={{ width: '50%', height: 'auto' }} // Ajustează dimensiunea imaginii
                        />
                    </div>

                    {/* Partea dreaptă cu textul */}
                    <div className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-md">
                        <p className="text-lg italic" style={textStyle}>About Me</p>
                        <h4 className="text-xl font-semibold mt-4">
                            I could describe myself as someone who focuses on a balanced, nutrient-dense diet and does regular exercise such as weight training.
                            I am the kind of person who gets information from several sources, such as nutrition, dietetics, psychology, psychonutrition, in order to keep my mental and physical state in harmony.
                            I like to guide and explain to those around me how to reach the best version of themselves.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
