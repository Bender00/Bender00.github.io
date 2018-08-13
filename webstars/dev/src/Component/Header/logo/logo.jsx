import React, { Component } from 'react';
import './logo.scss';
import logo_image from './logo.png';

export class Logo extends Component {

  render() {
    return (
        <div className="container logo col-9 col-md-4 col-xl-3">
          <img src={logo_image} alt="Logo"></img>
          <p>Интернет-магазин "Благой арт"</p>
        </div>
    )
  }
}

export default Logo;
