import React from 'react';
import resume from '../assets/others/WordPress Developer - Jessica Bonzo.pdf';

const HomeButton = (props) => 
    <React.Fragment>
       <a href={resume} className="button btn home-btn" download="WordPress Developer - Jessica Bonzo.pdf">{props.children}</a>
    </React.Fragment>

export default HomeButton;