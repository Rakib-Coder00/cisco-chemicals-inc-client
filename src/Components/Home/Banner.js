import React from 'react';
import img1 from '../../Assets/Images/hero3.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }} >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content mr-96  text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className="mb-5 text-4xl text-white font-bold">Let's make hybrid work, work better for you.</h1>
                    <p data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900' className="mb-5 font-bold">Consumer demand, price fluctuations, global trade flows and play outage all play a role for chemical commodities. How do these impact markets around the world?</p>
                    <button data-aos='zoom-in'
                        data-aos-delay='1300' className="btn text-xl btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;