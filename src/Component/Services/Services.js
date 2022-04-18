import React from 'react';
import useServices from '../../Hooks/useServices/useService';
import SingleService from '../SingleServices/SingleService';
import './Services.css';



const Services = () => {
    const [services] = useServices();
    const topThree = services.slice(0, 3);
    return (
        <div className='services pt-5'>
            <h1>My Services</h1>
            <div className="service-details">
                {
                    topThree.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }

            </div>
        </div>
    );
};

export default Services;