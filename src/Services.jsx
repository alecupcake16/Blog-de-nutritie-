import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-10 bg-white-600">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-5 bg-white-600 text-blue-600 shadow-md rounded-md">
                        <img src="https://i.pinimg.com/474x/68/b8/41/68b841adacbb506871496779c165c7bf.jpg" alt="Icon 1" className="w-20 h-20 mx-auto mb-4.2" />
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Balanced Nutrition</h3>
                    </div>
                    <div className="p-5 bg-white-600 text-blue-600 shadow-md rounded-md">
                        <img src="https://i.pinimg.com/474x/96/4e/96/964e967026a4d3a9e22068420ef0be8c.jpg" alt="Icon 2" className="w-20 h-20 mx-auto mb-4.2" />
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Fitness Program</h3>
                    </div>
                    <div className="p-5 bg-white-600 shadow-md rounded-md">
                        <img src="https://i.pinimg.com/474x/b7/ee/ab/b7eeabd398df27bfeb23649c2982118e.jpg" alt="Icon 3" className="w-20 h-20 mx-auto mb-4.2" />
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Information & advice</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

