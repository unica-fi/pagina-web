import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Mision from './pages/Mision';
import Vision from './pages/Vision';

const Routes = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Historia' component={Historia} />
            <Route exact path='/Mision' component={Mision} />
            <Route exact path='/Vision' component={Vision} />
        </Switch>
);

export default Routes;