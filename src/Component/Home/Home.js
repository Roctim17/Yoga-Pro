import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWorks/HowItWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HowItWork></HowItWork>
        </div>
    );
};

export default Home;