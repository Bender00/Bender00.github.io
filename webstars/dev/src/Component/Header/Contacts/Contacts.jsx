import React, { Component } from 'react';
import './Contacts.scss';

export default class Contacts extends Component {
  render() {
    return (
      <div className="container contacts d-none d-md-block col-md-4 col-xl-4">
        <div className="row">

          <div className="container contacts__item_1 align-self-center col-md-6 col-xl-6">
            <p>+7(800) 707-81-39</p>
          </div>
          <div className="container  contacts__item_2 align-self-center col-md-6 col-xl-5">
            <p>ПН-ПТ с 9.00 до 18.00</p>
            <p>Доставка по РФ и СНГ</p>
          </div>        
        
        </div>
      </div>
    )
  }
}
