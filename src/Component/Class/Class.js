import React from 'react';
import useServices from '../../Hooks/useServices/useService';
import SingleService from '../SingleServices/SingleService';
import "./Class.css"

const Class = () => {
    const [services] = useServices();
    return (
        <div>
            <h1>Class</h1>
            <div className="class">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Class;