import React, { Component } from 'react';
import Routes from './routes';
import Footer from './components/Footer';

class app extends Component{
    render() {
        return(
            <div>
                <Routes/>
                <Footer/>
            </div>
        );
    }
}

export default app;