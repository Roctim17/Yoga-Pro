import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ service }) => {
    const navigate = useNavigate();
    const { name, price, img, time, description } = service;
    return (
        <div className='single-services'>
            <img src={img} alt="" />
            <div className="pt-3">
                <h3>{name}</h3>
                <p>{description.slice(0, 150)} ...</p>
                <h5>Schedule : {time}</h5>
                <h6>{price} $ /Month</h6>
                <button className='btn bg-warning m-3 w-75' onClick={() => navigate('/checkout')}> Check Out</button>
            </div>
        </div>
    );
};

export default SingleService;