import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img className="logo" alt="Pokemon logo" src="../public/pokeball.png"/>

        <h1>Pokemon</h1>
        
      </header>
    );
  }
}


export default Header;
