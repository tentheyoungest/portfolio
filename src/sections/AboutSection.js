import React from 'react';
import data from '../Data';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import ItemTitle from '../components/ItemTitle';
import ItemDesc from '../components/ItemDesc';

const { works, education, certification } = data;

const AboutSection = () =>
    <section id='about' 
    className='section-container-min'>
       <div className="container">
           <div className="row heading-light delay-3s customFadeInDown">
                <Title>About</Title>
           </div>
           <div className="inner-section">
                <div className="col-2">
                    <SubTitle>Work History</SubTitle>
                { works.map(work => (
                    <ul className="work-item" key={work.company}>                            
                        <li>
                        <a
                        href={work.website}
                        rel="noopener noreferrer"
                        target="_blank"
                        className=""
                        >
                            <img className="work-logo" src={work.logo.list.[0]} alt={work.company} />
                        </a>
                        </li>
                        <li>
                            <ItemTitle>{work.jobTitle}</ItemTitle>
                            <ItemDesc>{work.company} - {work.address}</ItemDesc>
                            <ItemDesc>{work.duration}</ItemDesc>
                        </li>
                        <li>
                            <ul className="work-responsibilities">
                                <li>
                                    <ItemDesc>{work.responsibilities[0]}</ItemDesc>
                                </li>
                                <li>
                                    <ItemDesc>{work.responsibilities[1]}</ItemDesc>
                                </li>
                                <li>
                                    <ItemDesc>{work.responsibilities[2]}</ItemDesc>
                                </li>
                            </ul>
                        </li>
                    </ul>
                )) }    
                </div>
                <div className="col-2 body">
                    <div className="about-item">
                    <SubTitle>Education</SubTitle>
                    { education.map(edu => (
                    <ul className="education-item" key={edu.degree}>
                            <li> 
                                <ItemTitle>{edu.degree}</ItemTitle>
                                <ItemDesc>{edu.school}</ItemDesc>
                                <ItemDesc>{edu.year}</ItemDesc>
                            </li> 
                    </ul>
                        )) } 
                    </div>
                    <div className="about-item">
                    <SubTitle>Certification</SubTitle>
                    <ul className="">
                        {certification.map(cert => (
                            <li key={cert.title}>
                            <ItemTitle><a href={cert.certificate}>{cert.title}</a></ItemTitle>
                            <ItemDesc>{cert.agency}</ItemDesc>
                            <ItemDesc>{cert.certificationNo}</ItemDesc>
                            <ItemDesc>{cert.expiration}</ItemDesc>
                         </li>
                        ))}
                    </ul>
                    </div>
                </div>
           </div>

        </div>
    </section>
  
export default AboutSection;
