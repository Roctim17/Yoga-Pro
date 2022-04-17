import React from 'react';
import './SingleService.css'

const SingleService = ({ service }) => {
    const { name, price, img, time } = service;
    return (
        <div className='single-services'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{time}</h5>
            <h6>{price} $ /Month</h6>
        </div>
    );
};

export default SingleService;