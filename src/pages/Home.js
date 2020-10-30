import React from 'react';
import Loader from 'react-loader-spinner';

import Header from '../components/includes/Header';
import HomeSection from '../sections/HomeSection';
import ServicesSection from '../sections/ServicesSection';
import SkillsSection from '../sections/SkillsSection';
import AboutSection from '../sections/AboutSection';
import PortfolioSection from '../sections/PortfolioSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/includes/Footer';
import ScrollToTop from '../components/ScrollToTop';



const Home = () =>
   <React.Fragment>
       {/* <Loader
        className="loader"
        type="Puff"
        color="#2bcfff"
        height={100}
        width={100}
        timeout={3000}
      /> */}
       <Header />
            <HomeSection />
            <ServicesSection />
            <SkillsSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
       <Footer />
       <ScrollToTop />
   </React.Fragment>

export default Home;
