import React, { Component } from 'react';
import './style.css';
import unicaDorado from '../../assets/images/logo_dorado.png'
import img from '../../assets/images/logo_azul_dorado.png';


class Home extends Component {
    render() {
        return(
            <div>
              <div id='unicaStart'>
                <img src={unicaDorado} alt="unicaLogo"/>
                <h1>Unidad de Servicios <br/> De Cómputo Academico</h1>
              </div>

              <div id='cards'>
                <section className="CardRight">
                  <img src={img} alt="img"/>
                  <div className='contentCards'>
                    <h3>Programa de formación de becarios</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum minima, itaque ea dolor, tempora asperiores at architecto tempore libero doloribus quia ipsa. Ipsum corporis quidem odit beatae, voluptatibus fuga.</p>
                    <input type='button' value="Saber más"/>
                  </div>
                </section>

                <section className="CardLeft">
                  <div className='contentCards'>
                    <h3>Curzos de actualización y capacitacion TIC</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum minima, itaque ea dolor, tempora asperiores at architecto tempore libero doloribus quia ipsa. Ipsum corporis quidem odit beatae, voluptatibus fuga.</p>
                    <input type='button' value="Saber más"/>
                  </div>
                  <img src={img} alt="img"/>
                </section>

                <section className="CardRight">
                  <img src={img} alt="img"/>
                  <div className='contentCards'>
                    <h3>Salas de cómputo para estudiantes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum minima, itaque ea dolor, tempora asperiores at architecto tempore libero doloribus quia ipsa. Ipsum corporis quidem odit beatae, voluptatibus fuga.</p>
                    <input type='button' value="Saber más"/>
                  </div>
                </section>

                <section className="CardLeft">
                  <div className='contentCards'>
                    <h3>Desarrollo de sistemas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio rerum minima, itaque ea dolor, tempora asperiores at architecto tempore libero doloribus quia ipsa. Ipsum corporis quidem odit beatae, voluptatibus fuga.</p>
                    <input type='button' value="Saber más"/>
                  </div>
                  <img src={img} alt="img"/>
                </section>
              </div>

            </div>
        );
    }
}

export default Home;
