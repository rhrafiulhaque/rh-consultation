import React from 'react';
import quote from '../../images/quote.svg';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id: 1,
            name: 'john doe',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: people1,
            country: 'New York'
        },
        {
            _id: 2,
            name: 'Rayna doe',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: people2,
            country: 'New York'
        },
        {
            _id: 3,
            name: 'Risha joe',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste.',
            img: people3,
            country: 'New York'
        }
    ]
    return (
        <div>
            <div className='flex justify-between px-5'>
                <div>
                    <h1 className='text-xl text-primary'>Testimonials</h1>
                    <p className='text-3xl'>What Our Patient Says</p>
                </div>
                <div>
                    <img className='lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 lg:px-20'>
            {
                reviews.map(review=><Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Testimonials;