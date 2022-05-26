import React from 'react';
import img1 from '../../Assets/Images/hero3.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }} >
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content mr-96  text-left text-neutral-content">
                <div class="max-w-md">
                    <h1 data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className="mb-5 text-4xl text-white font-bold">Connecting markets to optimize the world’s resources</h1>
                    <p data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900' class="mb-5 font-bold">Consumer demand, price fluctuations, global trade flows and play outage all play a role for chemical commodities. How do these impact markets around the world?</p>
                    <button data-aos='zoom-in'
              data-aos-delay='1300' class="btn text-xl btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;