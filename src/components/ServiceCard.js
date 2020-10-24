import React from 'react';

const ServiceCard = (props) =>
   <React.Fragment>
        <div className="service-card-item">
            <div>{props.children}</div>
        </div>
    </React.Fragment>
  
export default ServiceCard;