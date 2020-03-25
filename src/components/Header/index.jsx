import React, { Component } from 'react';
import unamAzul from '../../assets/images/escudounam_azul_m2008_png.png';
import fiAzul from '../../assets/images/EscudoFIVectorizadAzul2008PNG7x5.png';
import unicaDorado from '../../assets/images/logo_dorado.png';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component{
    render() {
        return(
            <div className='header_container'>
                <div className='header_logo'>
                    <img id='UNAM' src={unamAzul} alt='img' />
                    <img id='FI' src={fiAzul} alt='img' />
                    <Link to={'/'}>
                        <img id='UNICA' src={unicaDorado} alt='img' />
                    </Link>        
                </div>
                <nav>
                    <Link to={'/Historia'}>Historia</Link>
                    <Link to={'/Mision'}>Misión</Link>
                    <Link to={'/Vision'}>Visión</Link>
                    <Link to={'/Organizacion'}>Organización</Link>
                    <Link to={'/Servicios'}>Servicios</Link>
                    <Link to={'/Proyectos'}>Proyectos</Link>
                </nav>
            </div>
        );
    }
}

export default Header;