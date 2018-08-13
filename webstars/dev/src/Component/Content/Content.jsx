import React, { Component } from 'react';

import SimpleSlider from './Slider/Slider';
import './Content.scss';

export class Content extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <SimpleSlider />
      </div>
    )
  }
}

export default Content;
