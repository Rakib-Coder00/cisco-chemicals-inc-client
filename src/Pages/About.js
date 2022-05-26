import React from 'react';
import PageTitle from '../Components/Shared/PageTitle';

const About = () => {
    return (
        <div className='px-20 min-h-screen'>
            <h2 className='text-center text-5xl text-primary mt-6'>About Cisco Chemical </h2>
            <PageTitle title='About' />
            <p className='mt-14'>
                With an unrivalled global network, respected methodologies and distinguished industry experts, we help our customers to navigate fluctuating markets.</p>
                <p>Manufacturer of chemicals, chemical raw materials, intermediates, plastics, and resins. Binders, polymers, thermoplastics, and additives available. <br /> Specializes in sustainable products. Markets served include industrial, consumer goods, lighting, telecommunications, construction, energy, food and beverage, textiles, packaging, and automotive.</p>
        </div>
    );
};

export default About;