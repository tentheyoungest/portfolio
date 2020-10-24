import React from 'react';

const SmallTitle = (props) =>
    <React.Fragment>
        <h3 className='small-title'>
            {props.children}
        </h3>
    </React.Fragment>

export default SmallTitle;