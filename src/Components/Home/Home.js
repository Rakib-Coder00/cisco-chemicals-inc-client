import React from 'react';
import Banner from './Banner';
import BusinessSum from './BusinessSum';
import Careers from './Careers';
import Footer from './Footer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
        {/* <Banner/> */}
        <Careers/>
        <Reviews/>
        <Products/>
        <BusinessSum/>
        <Footer/>
        </div>
    );
};

export default Home;