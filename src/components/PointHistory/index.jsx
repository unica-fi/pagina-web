import React, { Component } from 'react';
import './style.css';

class PointHistory extends Component{
    render() {
        const List = this.props.list;
        const listItems = List.map((List) =>
            <li className='point_history_container'>
                <div className='point_history_content'>
                    <div className='history_title'>{List.title}</div>
                    <div className='history_content'>{List.content}</div>
                </div>
                <div className='point_history_date'>
                    <div className='history_date'>{List.date}</div>
                </div>
            </li>
        );
        
        return(
            <ul className='history_content'>
                {listItems}
            </ul>
        );
    }
}

export default PointHistory;