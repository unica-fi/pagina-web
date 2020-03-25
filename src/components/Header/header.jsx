import React, { Component } from 'react'
import './style.css'
import unamAzul from '../../assets/images/escudounam_azul_m2008_png.png'
import fiAzul from '../../assets/images/EscudoFIVectorizadAzul2008PNG7x5.png'
import unicaDorado from '../../assets/images/logo_dorado.png'

class Header extends Component {
  render () {
    return (
      <div id='header'>
        <img id='UNAM' src={unamAzul} alt='img' />
        <img id='FI' src={fiAzul} alt='img' />
        <img id='UNICA' src={unicaDorado} alt='img' />
        <nav>
          <a href='/historia'>Historia</a>
          <a href='/mision'>Misión</a>
          <a href='/vision'>Visión</a>
          <a href='/organizacion'>Organización</a>
          <a href='/servicios'>Servicios</a>
          <a href='/proyectos'>Proyectos</a>
        </nav>
      </div>
    )
  }
}

export default Header
