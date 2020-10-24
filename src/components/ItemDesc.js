import React from 'react';

const ItemDesc = (props) =>
    <React.Fragment>
        <p className='item-desc'>
            {props.children}
        </p>
    </React.Fragment>

export default ItemDesc;