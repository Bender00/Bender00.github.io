import React, { Component } from 'react';
import './menu.scss';
import Context_menu from './Context_menu';
import catalog from './ico/catalog.png';
import arrow_down from './ico/arrow_down.png';
import basket from '../Avtorization/ico/basket.png';
import ellipse_10 from '../Avtorization/ico/ellipse_10.png';
import man from '../Avtorization/ico/man.png';




export default class Menu extends Component {
  render() {
    return (
      <div className="menu d-none d-md-block">
        <nav className="navbar navbar-expand-lg">

                
                <ul className="navbar-nav nav__ul mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src={catalog}/> КАТАЛОГ ТОВАРОВ <img src={arrow_down}/><span className="sr-only">(current)</span></a>
                        
                        <Context_menu />

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">УСЛОВИЯ РАБОТЫ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">СКИДКИ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ОПЛАТА И ДОСТАВКА</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ДОКУМЕНТЫ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">КОНТАКТЫ</a>
                    </li>
                    <li className="nav-item d-sm-none d-xl-block">
                        <a className="nav-link" href="#"><img src={basket}/> <img src={ellipse_10}/> ТОВАР/56 789 P</a>
                    </li>
                    <li className="nav-item d-sm-none d-xl-block">
                        <a className="nav-link" href="#"><img src={man}/> ВОЙТИ</a>
                    </li>
                </ul>

                
                
            

        </nav>
      </div>
    )
  }
}
