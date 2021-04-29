import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.css';

class PokeList extends Component {

  render() {
    const listOfPokemon = this.props.listOfPokemon;
    //const { listOfPokemon } = this.props;

    return (
      <ul className="PokeList">
        {listOfPokemon.map(pokemonObj => (
          <PokeItem key={pokemonObj._id} pokemon={pokemonObj}/>
        ))}
      </ul>
    );
  }
}

export default PokeList;
