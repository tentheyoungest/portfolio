import React from 'react';

const PortfolioCard = (props) =>
    <React.Fragment>
        <div className="portfolio-card-item">
            <div>{props.children}</div>
        </div>
    </React.Fragment>

export default PortfolioCard;