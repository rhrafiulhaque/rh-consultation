import React from 'react';
import CardSection from '../CardSection/CardSection';
import DoctorAppointment from '../DoctorAppointment/DoctorAppointment';
import HeroSection from '../HeroSection/HeroSection'
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CardSection></CardSection>
            <Services></Services>
            <DoctorAppointment></DoctorAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;