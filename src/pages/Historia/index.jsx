import React, { Component } from 'react';
import PointHistory from '../../components/PointHistory';
import './style.css';

const json = [
    {'title' : 'CECAFI', 'content' : 'El Centro de Cálculo de la FI se crea el 16 de junio de 1972. Sería el encargado de dirigir el desarrollo en materia de cómputo de la FI.', 'date' : '1972'},
    {'title' : 'Plan de Becarios', 'content' : 'Se crea el Plan de Becarios, actualmente Programa de Formación de Becarios de UNICA.', 'date' : '1980'},
    {'title' : 'Sala de Cómputo', 'content' : 'Se abre un segundo espacio con computadoras para uso de los alumnos en el Conjunto Sur, hoy Sala UNICA 2.', 'date' : '1987'},
    {'title' : 'UNICA', 'content' : 'En 1994 CECAFI se divide, se crea UNICA y USECAD, la primera orientada a servicios académicos y la segunda a servicios administrativos.', 'date' : '1994'},
    {'title' : 'Sala UNICA 3', 'content' : 'En 1996 se habilita la Sala UNICA 3.', 'date' : '1996'},
    {'title' : 'Expansión de la red de datos', 'content' : 'UNICA liderea la expansión de la red de datos de la FI y sistematiza diversos procesos institucionales.', 'date' : '1997'},
    {'title' : 'Departamento de Seguridad en Cómputo', 'content' : 'Para este año, UNICA ya cuenta con 4 departamentos: DID, DROS, DSA y DSC.', 'date' : '2004'},
    {'title' : 'Sala UNICA 4', 'content' : 'Se inaugura la Sala UNICA 4 ,primer sala con tecnología inalámbrica de la UNAM.', 'date' : '2004'},
    {'title' : 'Generación 50', 'content' : 'Se han formado 50 generaciones del Programa de Formación de Becarios de UNICA.', 'date' : '2005'},
    {'title' : 'EDUCAFI', 'content' : 'Se pone en marcha el servicio de Plataforma Educativa EDUCAFI.', 'date' : '2005'},
    {'title' : 'Esquema de Seguridad Perimetral', 'content' : 'Se pone en marcha el servicio institucional de seguridad informática de la FI.', 'date' : '2005'},
    {'title' : 'Cloud Computing', 'content' : 'Se pone en marcha el servicio de consolidación de servidores a través de la virtualización.', 'date' : '2009'},
    {'title' : 'Sistema Planes y Programas de Estudio', 'content' : 'UNICA es la responsable de desarrollar y mantener el sistema PyPE, entre otros.', 'date' : '2013'},
    {'title' : 'Generación 75', 'content' : 'Se han formado 75 generaciones del Programa de Formación de Becarios de UNICA.', 'date' : '2019'},
    {'title' : 'Cursos en línea', 'content' : 'UNICA consolida de manera formal un equipo interdisciplinario para el desarrollo de cursos en línea.', 'date' : '2019'}
];

class Historia extends Component {
    render() {
        return(
            <div className='historia_container'>
                <PointHistory list={json}/>
                <div className='clear'></div>
            </div>
        );
    }
}

export default Historia;