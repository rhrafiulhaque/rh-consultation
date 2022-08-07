import React from 'react';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: cavity,
        },
        {
            _id: 3,
            name: 'whitenint treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: whitening,
        }
    ]

    return (
        <div className='mt-36 mb-40'>
            <h1 className='text-primary uppercase text-center py-2 font-bold text-xl'>Our Services</h1>
            <p className='text-3xl text-center pb-10'>Services We Provide</p>

            <div className=' px-10 grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;