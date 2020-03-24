import React, { Component } from 'react';
import './style.css';

class Card extends Component{
    render() {
        return(
            <div className='card_container'>
                <div className='card_title'>{this.props.title}</div>
                <div className='card_content'>{this.props.content}</div>
            </div>
        );
    }
}

export default Card;