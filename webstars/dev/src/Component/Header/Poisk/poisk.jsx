import React, { Component } from 'react';
import './poisk.scss';
import poisk from './poisk.png';

export class Poisk extends Component {
  render() {
    return (
        <form className="container align-self-center form_poisk d-none d-md-block col-md-4 col-xl-5">

          <label className="sr-only" htmlfor="inlineFormInputGroup">Введите название или артикул</label>

          <div className="input-group mb-2">
            <input type="search" className="form__input input_border form-control" id="inlineFormInputGroup" placeholder="Введите название или артикул"></input>
            <div className="input-group-prepend">
              <div className="input-group-text input_icon"><img src={poisk} alt="poisk"/></div>
            </div>
          </div>

        </form>     
              
    )
  }
}

export default Poisk;
