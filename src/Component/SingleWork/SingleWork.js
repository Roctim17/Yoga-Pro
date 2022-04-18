import React from 'react';
import './SingleWork.css'

const SingleWork = ({ work }) => {
    const { name, img, description } = work;
    return (
        <div>
            <div className="single-work p-5">
                <img src={img} alt="" />
                <h5 className='pt-3'>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleWork;