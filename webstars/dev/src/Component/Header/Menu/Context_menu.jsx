import React, { Component } from 'react';
import './context_menu.scss';
import Context_menu__Mens_accessories from './Mens_accessories';

import arrow_rigth from './ico/arrow_rigth.png';
import marker_ellipse from './ico/marker_ellipse.svg';


export class Context_menu extends Component {
    
  render() {
    return (
        <ul className="navbar-nav menu__context_menu mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Свадебная бижутерия <img src={arrow_rigth}/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Аксессуары для волос</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Броши</a>
            </li>
            <li className="nav-item">
                <a className="nav-link man_line" href="#"><img src={marker_ellipse}/> Мужские аксессуары <img src={arrow_rigth}/></a>
                
                    <Context_menu__Mens_accessories />

            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Клатчи</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Детская бижутерия</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/> Демонстрационное <span>обородование</span></a>
            </li>
    </ul>
    )
  }
}

export default Context_menu;
