import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mision from './pages/Mision';
import Vision from './pages/Vision';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Mision' component={Mision} />
            <Route exact path='/Vision' component={Vision} />
        </Switch>
    </BrowserRouter>
);

export default Routes;