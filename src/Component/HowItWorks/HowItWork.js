import React, { useEffect, useState } from 'react';
import SingleWork from '../SingleWork/SingleWork';
import './HowItWork.css'

const HowItWork = () => {
    const [workData, SetWorkData] = useState([]);
    useEffect(() => {
        fetch('/Howitwork.json')
            .then(res => res.json())
            .then(data => SetWorkData(data))
    }, [])
    return (
        <div>
            <div className="row p-1">
                <h1> How it Works</h1>
                <h5>Find and book a great experience</h5>

                <div className="how-it-work">
                    {
                        workData.map(work => <SingleWork
                            key={work.id}
                            work={work}
                        ></SingleWork>)
                    }
                </div>

            </div>
        </div>
    );
};

export default HowItWork;