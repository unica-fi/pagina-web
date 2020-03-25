import React, { Component } from 'react';
import Card from '../../components/Card';
import './style.css';

const title = 'Visión';
const content= 'Gestionar el desarrollo informático de la Facultad de Ingeniería a través de procesos articulados de vanguardia, con esquemas de colaboración y alianzas sinérgicas al interior y exterior, promoviendo un manejo ágil, seguro, de mayores capacidades del conocimiento y de la informacion; emprendimiento y la vinculación, por medio de proyectos de innovación científicos y tecnológicos, a través deñ amplio acceso, uso y apropiación de las Tecnologías de la Infomación y la Comunicación TIC y de las Tecnologías de Aprendizaje y del Conocimineto TAC.';

class Vision extends Component {
    render() {
        return(
            <div className='vision_container'>
                <Card title={title} content={content}/>
            </div>
        );
    }
}

export default Vision;