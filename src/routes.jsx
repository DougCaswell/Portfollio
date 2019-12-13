import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import PageNotFound from './components/PageNotFound.jsx';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/aboutMe' component={AboutMe} />
        <Route component={PageNotFound} />
    </Switch>
)