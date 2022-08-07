import React from 'react';

const Review = ({ review }) => {
    const { _id, name, description,img,country } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{description}</p>

                <div className='flex pt-[22px]'>
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='pl-[12px]'>
                        <h1>{name}</h1>
                        <p>{country}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;