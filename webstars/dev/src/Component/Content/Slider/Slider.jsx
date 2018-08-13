import React, { Component } from 'react';
import Slider from 'react-slick/lib';
import image_1 from './image_1.png';
import './Slider.scss';


export default class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (

        <div>
          <div className="public">Новая колекция SWAROWSKI уже здесь!</div>
                  <Slider {...settings}>
           <div className="container-fluid slider__image">
            <img  src={image_1} />
            
          </div>
          <div className="container-fluid slider__image">
            <img  src={image_1} />
          </div>
          <div className="container-fluid slider__image">
            <img  src={image_1} />
          </div>
          <div className="container-fluid slider__image">
            <img  src={image_1} />
          </div>

        </Slider>
        </div>

      );
  }
}