import React, { Component } from 'react';
import Routes from './Routes';
import './assets/css/style.css';
import './assets/css/custom-animation.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import {isMobile} from 'react-device-detect';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    const header = document.getElementById('header');
    if (!isMobile) {
      if (window.pageYOffset > 60) {
        if (header) {
          header.classList.add('fixed-header');
        }
      } else {
        if (header) {
          header.classList.remove('fixed-header');
        }
      }

    } else {
       console.log('mobile!');
    }
  }
  
render () {
    return (
      <Routes />
    );
  }
}

export default App;
