import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor () {
        super();
        this.state = {

        };
    }

    showMenuIcon = () => {

    }



// const Header = () =>
    render () {
     return (
        <React.Fragment>
            <section id='header'>
                <div className='nav'>
                    <ul>
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/services' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/skills' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            Skills
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/about' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/portfolio' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link' 
                            exact to='/contact' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            Contact
                            </NavLink>
                        </li>
                        </ul>
                        <div className='menu-icon'>
                            <button onClick={this.showMenuIcon}
                            href=""
                            // exact to='/contact' 
                            //  style={} 
                            //  activeStyle={}
                            >
                            <i className="fa fa-bars"></i>
                            </button>
                        </div>
                </div>
            </section>
        </React.Fragment>         
     )
    }

}

export default Header;
