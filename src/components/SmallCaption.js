import React from 'react';

const SmallCaption = (props) =>
    <React.Fragment>
        <h3 className='home-caption light'>
            {props.children}
        </h3>
    </React.Fragment>

export default SmallCaption;