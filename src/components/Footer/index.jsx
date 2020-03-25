import React, { Component } from 'react';
import unam from '../../assets/images/UNAM.png';
import fi from '../../assets/images/FI.jpg';
import ButtonUp from '../ButtonUp';
import './style.css';

const direccion = 'AV. Universidad 3000, Ciudad Universitaria, Coyoacán, CDMX, 04510.';
const derechos = '2020 Unidad de Servicios de Cómputo Academico (UNICA), todos los derechos reservados.'

class Footer extends Component{
    render() {
        return(
            <div className='footer_container'>
                <div className='footer_up'>
                    <img src={unam} alt='UNAM'/>
                    <h1>Unica</h1>
                    <img src={fi} alt='FI'/>
                </div>
                <div className='footer_middle'>
                    {direccion}
                </div>
                <div className='footer_buttom'>
                    <ButtonUp/>
                </div>
                <div className='footer_bottom'>
                    &copy; {derechos}
                </div>
            </div>
        );
    }
}

export default Footer;