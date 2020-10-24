import React from 'react';
import Title from '../components/Title';
import SkillBar from '../components/SkillBar';
import skillsbg from '../assets/img/contact-bg.png';

const SkillsSection = () =>
    <section id="skills" className="section-container-min"
    style={{backgroundImage: `url(${skillsbg})`}}>
        <div className="container">
            <div className="row heading-light">
                <Title>Skills</Title>
            </div>
            <div className="inner-section">
                <div className="col-2">
                        <SkillBar />
                </div> 
            </div>
        </div>
    </section>
  
export default SkillsSection;
