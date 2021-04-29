import React, { Component } from 'react';
import './PokeItem.css';

class PokeItem extends Component {

  render() {
    
    const pokemon = this.props.pokemon;

    return (
      <li className="PokeItem">
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
        <p>Height: {pokemon.height}</p>
      </li>
    );
  }
}


export default PokeItem;
