import React from 'react';

const Title = (props) =>
    <React.Fragment>
        <h3 className="title">
            {props.children}
        </h3>
    </React.Fragment>

export default Title;