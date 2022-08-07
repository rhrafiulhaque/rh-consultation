import React from 'react';

const Service = ({service}) => {
    const {_id,name,description,img}= service;
    return (
            <div class="card w-96 bg-base-100 shadow-xl pt-10 lg:pt-0">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class=" text-2xl font-bold text-center">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
    );
};

export default Service;