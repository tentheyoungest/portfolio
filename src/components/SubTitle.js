import React from 'react';

const SubTitle = (props) =>
    <React.Fragment>
        <p className='subtitle light'>
            {props.children}
        </p>
    </React.Fragment>

export default SubTitle;