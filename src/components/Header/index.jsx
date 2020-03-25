import React, { Component } from 'react';
import unamAzul from '../../assets/images/escudounam_azul_m2008_png.png';
import fiAzul from '../../assets/images/EscudoFIVectorizadAzul2008PNG7x5.png';
import unicaDorado from '../../assets/images/logo_dorado.png';
import './style.css';

class Header extends Component {
  render () {
    return (
      <div className='header_container'>
        <div className='header_logo'>
          <img id='UNAM' src={unamAzul} alt='img' />
          <img id='FI' src={fiAzul} alt='img' />
          <a href='/'>
            <img id='UNICA' src={unicaDorado} alt='img' />
          </a>        
        </div>
        <nav>
          <a href='/historia'>Historia</a>
          <a href='/mision'>Misión</a>
          <a href='/vision'>Visión</a>
          <a href='/organizacion'>Organización</a>
          <a href='/servicios'>Servicios</a>
          <a href='/proyectos'>Proyectos</a>
        </nav>
      </div>
    );
  }
}

export default Header;
