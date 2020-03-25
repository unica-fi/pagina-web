import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

class app extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Routes/>
                <Footer/>
            </div>
        );
    }
}

export default app;