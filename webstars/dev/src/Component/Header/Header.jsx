import React, { Component } from 'react';
import './Header.scss';
import Logo from './logo/logo';
import Poisk from './Poisk/poisk';
import Contacts from './Contacts/Contacts';
import Avtorization from './Avtorization/Avtorization';
import Menu from './Menu/menu';
import Menu_369 from './Menu/Menu_369/menu_369';

export class Header extends Component {
  render() {
    return (
        <header>
            
            <div className="container">
                <div className="row">
                    <Menu_369 />
                    <Logo />
                    <Poisk />
                    <Contacts />

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <Avtorization />
                    <Menu />
                </div>
            </div>

            
        </header>
    )
  }
}

export default Header;
