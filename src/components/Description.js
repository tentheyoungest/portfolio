import React from 'react';

const Description = (props) =>
    <React.Fragment>
        <p className='description'>
            {props.children}
        </p>
    </React.Fragment>

export default Description;