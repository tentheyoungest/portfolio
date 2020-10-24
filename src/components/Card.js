import React from 'react';

const Card = (props) =>
    <React.Fragment>
        <div className="portfolio-card-item">
            <p>{props.children}</p>
        </div>
    </React.Fragment>

export default Card;