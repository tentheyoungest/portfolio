import React from 'react';
import emailjs from 'emailjs-com';
import data from '../Data' ;
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import bg from '../assets/img/Confetti-Doodles.svg';
import upwork from '../assets/img/upwork-icon.png';
import { render } from '@testing-library/react';

const { contactDesc, contact } = data;

class ContactSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fields: {},
            errors: {},
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
        e.preventDefault();
        const { serviceId, tempId, userId } = this.state;
        if(this.validateFormHandler()) {
            this.setState({ name: '', email: '', subject: '', message: '' });
            emailjs.sendForm(serviceId, tempId, e.target, userId).then(
                result => {
                    alert( 'Thank you for messaging me, I will reply as soon as I read your message!');
                },
                error => {
                    alert('Unfortunately, your message cannot send right now. Please try again later or you may reach me through my social media accounts');
                }
            );
        }

    }

    validateFormHandler = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Please enter your name";
        }

        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Please enter your email";
        }

        if(!fields["subject"]){
            formIsValid = false;
            errors["subject"] = "Please don't leave this field empty";
        }

        if(!fields["message"]){
            formIsValid = false;
            errors["message"] = "Please don't leave this field empty";
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
        const { errors, name, email, subject, message, author } = this.state;
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
                            className="contact-form-inner"
                            onSubmit={this.submitFormHandler}
                            noValidate
                            >
                            <div className="text-field">
                                <input
                                    value={name}
                                    name="name"
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Name"
                                    required
                                    autoComplete="off"
                                    noValidate />
                                <div className="error-message">{errors.name}</div> 
                            </div>
                            <div className="text-field">
                                <input 
                                    value={email}
                                    name="email"
                                    onChange={this.changeHandler}
                                    type="email"
                                    className=""
                                    placeholder="Email"
                                    required
                                    autoComplete="off"
                                    noValidate />
                                <div className="error-message">{errors.email}</div> 
                            </div>
                            <div className="text-field">
                                <input
                                    value={subject}
                                    name="subject"
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Subject"
                                    required
                                    autoComplete="off" />
                                <div className="error-message">{errors.subject}</div>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    id="message"
                                    value={message}
                                    name="message" 
                                    onChange={this.changeHandler}
                                    type="text"
                                    className=""
                                    placeholder="Message"
                                    required
                                    autoComplete="off" >   
                                </textarea>
                                <div className="error-message">{errors.message}</div> 
                                
                                <input type='hidden' value={author} name='author' />
                                <input type='hidden' value={email} name='reply_to' />
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
