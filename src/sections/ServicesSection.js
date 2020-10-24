import React from 'react';
import Title from '../components/Title';
import ItemTitle from '../components/ItemTitle';
import ItemDesc from '../components/ItemDesc';
import ServiceCard from '../components/ServiceCard';
import ModalContainer from '../components/ModalContainer';
import Modal from 'react-modal';
import rd from '../assets/img/services/responsive-design.png';
import cw from '../assets/img/services/custom-wordpress.png';

const ServicesSection = () =>
    <section id="services" className="section-container-services">
        <div className="container">
            <div className="row heading-light">
                <Title>Services</Title>
            </div>
            <div className="inner-section">
                <div className="col-2">
                    <div className="service-group">
                        <ServiceCard>
                            <img className="services-img" src={cw} alt={cw} />
                            <ItemTitle>Custom WordPress Development</ItemTitle>
                            <ItemDesc>Custom Fields, Templates and Child Theme</ItemDesc>
                        </ServiceCard>
                        <ServiceCard>
                            <img className="services-img" src={rd} alt={rd} />
                            <ItemTitle>Responsive Design</ItemTitle>
                            <ItemDesc>Lorem Custom Fields, Templates and Child Theme Custom Fields, Templates and Child Theme</ItemDesc>
                        </ServiceCard>
                        <ServiceCard>
                            <img className="services-img" src={rd} alt={rd} />
                            <ItemTitle>Lorem</ItemTitle>
                            <ItemDesc>Lorem Custom Fields, Templates and Child Theme</ItemDesc>
                        </ServiceCard>
                        {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
                        {/* <button onClick={this.props.toggleModal}>Open modal</button> */}
                    </div>
                </div> 
            </div>
        </div>
    </section>
  
export default ServicesSection;