import React from 'react';

const BigTitle = (props) =>
    <React.Fragment>
        <h1 className='big-title'>
            {props.children}
        </h1>
    </React.Fragment>

export default BigTitle;