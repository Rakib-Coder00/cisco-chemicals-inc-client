import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Banner from './Banner';
import BrandPartners from './BrandPartners';
import BusinessSum from './BusinessSum';
import Careers from './Careers';
import Footer from './Footer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home' />
            <Banner />
            <Products />
            <Reviews />
            <BusinessSum />
            <BrandPartners />
            <Careers />
            <Footer />
        </div>
    );
};

export default Home;