import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { isEmail } from '../utils/validation';

import data from '../Data' ;
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import bg from '../assets/img/Confetti-Doodles.svg';
import upwork from '../assets/img/upwork-icon.png';
import { render } from '@testing-library/react';


const { contactDesc, contact } = data;
//- 1. create the form component (input fields - name, email, subject, message)
// 2. initialize state in constructor (setting to empty strings)
// 3. hook up input fields to the state values
// 4. 
 


// const ContactSection = () =>
class ContactSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fields: {},
            errors: {},
        // name: '',
        // email: '',
        // subject: '',
        // message: '',
            author: process.env.REACT_APP_AUTHOR,
            serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            tempId: process.env.REACT_APP_EMAILJS_TEMP_ID,
            userId: process.env.REACT_APP_EMAILJS_USER_ID,
    };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitFormHandler = this.submitFormHandler.bind(this);
        
    };

    changeHandler = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    }

    submitFormHandler = (e) => {
        console.log(this.validateFormHandler());

        e.preventDefault();
        if(this.validateFormHandler()) {
            console.log(this.state);

            // this.setState({fields: fields});
            console.log(this.state);
            alert("Form submitted");
        }

    }

    validateFormHandler = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // name, email,subject,message
        if(!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Please enter your name";
        }

        if(typeof fields["name"] !== "undefined") {
            if(!fields["name".match(/^[a-zA-Z]*$/)]) {
                formIsValid = false;
                errors["name"] = "Please enter alphabet characters only.";
            }
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Please enter your email";
        }

        if(typeof fields["email"] !== "undefined") {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter valid email";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }

    render() {
        // const { name, email, subject, message, author } = this.state.fields;
        const { errors } = this.state;
        return(
        <section id="contact" className="section-container-min"
        style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
                <div className="row heading-light">
                    <Title>Contact</Title>
                </div>
                <div className="inner-section">
                    <div className="col-2" style={{margin: "50px 0 0 0"}}>
                        <SubTitle>{contactDesc}</SubTitle>
                            <p className="contact-icon-group">
                                <a href={`tel:${contact.mobileNumber}`}
                                    className="" >
                                    <i className="fa fa-phone-alt" />
                                </a>
                                <a href={`mailto:${contact.email}`}
                                    className="" >
                                    <i className="fas fa-envelope" />
                                </a>
                                <a href={contact.fbMessenger}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="" >
                                    <i className="fab fa-facebook-messenger" />
                                </a>
                                <a href={contact.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="" >
                                    <i className="fab fa-github" />
                                </a>
                                <a href={contact.linkedIn}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="" >
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href={contact.upwork}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="" >
                                    <span className="upwork"><img className="upwork-icon" src={upwork} alt={upwork} /></span>
                                </a>
                            </p>
                    </div>
                    <div className="col-2 body">
                    <div className="contact-form">
                        <form 
                            // action="#" 
                            className="contact-form-inner"
                            onSubmit={this.submitFormHandler}
                            noValidate
                            >
                            <div className="text-field">
                                <input
                                    value={this.state.fields.name}
                                    name="name"
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Name"
                                    required
                                    autoComplete="off"
                                    // maxLength="50"
                                    noValidate
                                />
                                <div className="error-message">{errors.name}</div> 
                                {/* <div className='invalid-feedback'> 
                                    Please provide a valid name
                                </div>
                                <div className='valid-feedback'>Looks good!</div>*/}

                            </div>
                            <div className="text-field">
                                <input 
                                    value={this.state.fields.email}
                                    name="email"
                                    onChange={this.changeHandler}
                                    type="email"
                                    className=""
                                    placeholder="Email"
                                    required
                                    autoComplete="off"
                                    noValidate
                                />
                                <div className="error-message">{errors.email}</div> 
                                {/* <div className='invalid-feedback'> 
                                    Please provide a valid email
                                </div>
                                <div className='valid-feedback'>Looks good!</div>*/}

                            </div>
                            <div className="text-field">
                                <input
                                    value={this.state.fields.subject}
                                    name="subject"
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Subject"
                                    required
                                    autoComplete="off"
                                    // maxLength="30"
                                />
                                <div className="error-message">{errors.subject}</div> 
                                {/* <div className='invalid-feedback'> 
                                    Please provide a valid subject
                                </div>
                                <div className='valid-feedback'>Looks good!</div>*/}

                            </div>
                            <div className="form-group">
                                <textarea 
                                    id="message"
                                    value={this.state.fields.message}
                                    name="message" 
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Message"
                                    required
                                    autoComplete="off"
                                    // maxLength="1000" 
                                >   
                                </textarea>
                                <div className="error-message">{errors.mail}</div> 
                                {/* <div className='invalid-feedback'> 
                                    Please provide a valid message
                                </div>
                                <div className='valid-feedback'>Looks good!</div>*/}

                                <input type='hidden' value={this.state.fields.author} name='author' />
                                <input type='hidden' value={this.state.fields.email} name='reply_to' />
                            </div>
                            <div className="form-button">
                                <button type="submit" className="btn primary-btn">SEND</button>
                            </div>
                        </form>               
                    </div>
                </div>         
                </div>
            </div>
        </section>
        );
    }   
}
export default ContactSection;
