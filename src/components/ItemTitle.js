import React from 'react';

const ItemTitle = (props) =>
    <React.Fragment>
        <h3 className="item-title">
            {props.children}
        </h3>
    </React.Fragment>

export default ItemTitle;