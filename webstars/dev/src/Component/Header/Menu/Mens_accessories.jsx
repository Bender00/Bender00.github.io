import React, { Component } from 'react';
import marker_ellipse from './ico/marker_ellipse.svg';
import './Mens_accessories.scss';


export default class Context_menu__Mens_accessories extends Component {
  render() {
    return (
        <ul className="navbar-nav context_menu_man mr-auto">
            МУЖСКАЯ БИЖУТЕРИЯ
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/>Браслети</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/>Колони</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><img src={marker_ellipse}/>Зажими и запонки</a>
            </li>
        </ul>
    )
  }
}
