import React from 'react';
import clock from '../../images/clock.svg'
import location from '../../images/marker.svg'
import phone from '../../images/phone.svg'

const CardSection = () => {
    return (
        <div className='mt-[45px] grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 '>
            <div class="card  text-white lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl pl-[10px]">
                <figure><img src={clock} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore.</p>
                </div>
            </div>
            <div class="card  lg:card-side bg-accent text-white shadow-xl pl-[10px]">
                <figure><img src={location} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Our Location</h2>
                    <p>ShahBag, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div class="card  text-white lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl pl-[10px]">
                <figure><img src={phone} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact Us</h2>
                    <p>+880 017 *** ***</p>
                </div>
            </div>
        </div>
    );
};

export default CardSection;