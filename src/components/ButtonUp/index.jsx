import React, { Component } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './style.css';

class ButtonUp extends Component{
    action = () =>{
        window.scrollTo(0,0);
    }

    render() {
        return(
            <button className='button_container' onClick={this.action}>
                <IoIosArrowUp className='button_icon_arrow'/>
            </button>
        );
    }
}

export default ButtonUp;