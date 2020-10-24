import React from 'react';
import Bigtitle from '../components/BigTitle';
import Smalltitle from '../components/SmallTitle';

import bg from '../assets/img/Confetti-Doodles.svg';

const NotFound = () => 
    <section id="not-found" className="section-container-full"
        style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
            <div className="inner-section fixed">
                <div>
                    <i className="fas fa-frown-open" />
                    <Bigtitle>404</Bigtitle>
                    <Smalltitle>Page Not Found</Smalltitle>
                    <a href="/" className="button btn home-btn">Go to Homepage</a>
                 </div>
            </div>
        </div>
    </section>


export default NotFound;
