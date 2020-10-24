import React from 'react';

const Caption = (props) =>
    <React.Fragment>
        <p className='caption light'>
            {props.children}
        </p>
    </React.Fragment>

export default Caption;