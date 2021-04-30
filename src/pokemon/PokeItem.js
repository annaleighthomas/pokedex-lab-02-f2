import React, { Component } from 'react';
import './PokeItem.css';

class PokeItem extends Component {

  render() {
    
    const pokemonObj = this.props.pokemon;

    return (
      <li className="PokeItem">
        <h2>{pokemonObj.pokemon}</h2>
        <img src={pokemonObj.url_image} alt={pokemonObj.pokemon}/>
        <p>Height: {pokemonObj.height}</p>
      </li>
    );
  }
}


export default PokeItem;
