import React from 'react';
import chair from '../../images/chair.png'
import PrimaryButton from '../shared/PrimaryButton';
const heroSection = () => {
    return (
        <div>
            <div class="hero min-h-screen mt-[35px]">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts</h1>
                        <p class="py-6">We are providing you the best service. We have the best doctor for your treatment. We are always care you to give our best.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default heroSection;