import React from 'react';
import data from '../Data';
import HomeButton from '../components/HomeButton';
import BigTitle from '../components/BigTitle';
import SmallTitle from '../components/SmallTitle';
import ItemDesc from '../components/ItemDesc';

import bubblepink from '../assets/img/bubble-pink2.svg';
import bg from '../assets/img/Confetti-Doodles.svg';
import dev from '../assets/img/dev.png';

const { jobTitle, aboutCaption } = data;

const HomeSection = () =>
    <section id="home" className="section-container-full"
    style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
            <div className="inner-section">
                <div className="col-2 delay-3s customFadeInLeft">
                    <div className="home-caption">
                        <SmallTitle>Hi, I'm {process.env.REACT_APP_AUTHOR}!</SmallTitle>
                        <BigTitle>a {jobTitle}</BigTitle>
                        <ItemDesc>{aboutCaption}</ItemDesc>
                        <HomeButton>Download Resume</HomeButton> 
                    </div>
                </div>
                <div className="col-2 body delay-3s customFadeInRight"
                    style={{backgroundImage: `url(${bubblepink})`}}
                    >  
                  <img className="dev-clip" alt={dev} src={dev} />
                </div>
            </div>
        </div>
    </section>
  
export default HomeSection;
