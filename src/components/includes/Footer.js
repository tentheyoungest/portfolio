import React from 'react';

const Footer = () =>
    <React.Fragment>
         <section id='footer' className='section-container-footer'>
            <div className="container">
                <div className='footer'>
                    <p><code className='code-text'>Made with love</code><i className='fa fa-heart' aria-hidden='true'></i></p>
                    <p><code className='code-text'>Copyright &copy; {new Date().getFullYear()} Jessica Joy Bonzo. All rights reserved.</code></p>
                </div>
            </div>
         </section>
    </React.Fragment>

export default Footer;
