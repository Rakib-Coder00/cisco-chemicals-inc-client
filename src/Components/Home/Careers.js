import React from 'react';
import career from '../../Assets/Images/career2.jpg'

const Careers = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${career})` }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content mr-96 text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold">Careers</h1>
                    <p className="mb-5">We believe in careers. Respected by the communities and industries we operate in, CISCO offers challenging and rewarding careers in a variety of technical and non-technical roles.We look forward to hearing from you!</p>
                    <button className="btn btn-primary">Join Our Team</button>
                </div>
            </div>
        </div>
    );
};

export default Careers;