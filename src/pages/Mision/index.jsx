import React, { Component } from 'react';
import Card from '../../components/Card';
import './style.css';

const title = 'Misión';
const content= 'Proporcionar eficaz y eficientemente en el ámbito institucional, los servicios de Tecnología de la informacion y la Computación TIC y de las Tecnologías de Aprendizaje y el Conocimineto TAC, que coadyuven al proceso integral de formación del capital humano en la Facultad de Ingeniería';

class Mision extends Component {
    render() {
        return(
            <div className='mision_container'>
                <Card title={title} content={content}/>
            </div>
        );
    }
}

export default Mision;