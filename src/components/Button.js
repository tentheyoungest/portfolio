import React, { Component } from 'react';

const Button = (props) => 
    <React.Fragment>
        <button className='primary-btn'>
                {props.children}
        </button>
    </React.Fragment>

export default Button;