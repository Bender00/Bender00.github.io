import React, { Component } from 'react';
import './Avtorization.scss';
import basket from './ico/basket.png';
import ellipse_10 from './ico/ellipse_10.png';
import man from './ico/man.png';

export default class Avtorization extends Component {
  render() {
    return (
      <div className="container avtorization d-none d-lg-block d-xl-none">
        <div className="row justify-content-end">
        
          <div className="basket">
            <a className="nav-link" href="#"><img src={basket}/> <img src={ellipse_10}/> ТОВАР/<span>56 789 P</span></a>
          </div>
          <div className="autor">
            <a className="nav-link" href="#"><img src={man}/> ВОЙТИ</a>
          </div>
        
        </div>
      
      </div>
    )
  }
}
