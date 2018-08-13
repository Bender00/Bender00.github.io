import React, { Component } from 'react';
import './menu_369.scss';
import burger from './icon/burger.png';
import home from './icon/home.png';
import search from './icon/search.png';
import basket from './icon/basket.png';
import man from './icon/man.png';
import phone from './icon/phone.png';


export default class Menu_369 extends Component {
  render() {
    return (

        <ul className="nav d-md-none d-lg-none d-xl-none menu_369">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={burger} alt="burger"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={home} alt="home"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={search} alt="serch"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={basket} alt="basket"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={man} alt="man"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={phone} alt="phone"/>
                </a>
            </li>
        </ul>
    //   <div className="container-fluid menu_369 d-block d-lg-none d-xl-none">
    //         <ul className="nav">
    //             <li className="nav-item">
    //                 <a className="nav-link active" href="#">
    //                     <img src={burger} alt="burger"/>                    
    //                 </a>
    //                 <a className="nav-link" href="#">
    //                     <img src={home} alt="burger"/>                    
    //                 </a>
    //                 <a className="nav-link" href="#">
    //                     <img src={search} alt="burger"/>                    
    //                 </a>
    //                 <a className="nav-link" href="#">
    //                     <img src={basket} alt="burger"/>                    
    //                 </a>
    //                 <a className="nav-link" href="#">
    //                     <img src={man} alt="burger"/>                    
    //                 </a>
    //                 <a className="nav-link" href="#">
    //                     <img src={phone} alt="burger"/>                    
    //                 </a>
    //             </li>
    //         </ul>
    //   </div>
    )
  }
}
