import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.css';

class PokeList extends Component {

  render() {
    const pokemon = this.props.pokemon;

    return (
      <ul className="PokeList">
        {pokemon.map(pokemon => (
          <PokeItem key={pokemon._id} pokemon={pokemon}/>
        ))}
      </ul>
    );
  }
}

export default PokeList;
