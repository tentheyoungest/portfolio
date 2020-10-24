import React from 'react';

const CaptionDark = (props) =>
    <React.Fragment>
        <p className='caption dark'>
            {props.children}
        </p>
    </React.Fragment>

export default CaptionDark;