import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './sections/ServicesSection';
import Skills from './sections/SkillsSection';
import About from './sections/AboutSection';
import Portfolio from './sections/PortfolioSection';
import Contact from './sections/ContactSection';
import NotFound from './sections/NotFound';


const Routes = () => 
    <Router basename='/'>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/skills' component={Skills} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
        </Switch>
    </Router>
export default Routes;
