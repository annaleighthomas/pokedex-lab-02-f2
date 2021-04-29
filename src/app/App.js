import { Component } from 'react';
import React from 'react';
import Header from './Header';
import PokeList from '../pokemon/PokeList';
import Footer from './Footer';
import request from 'superagent';
import PokeSearch from '../search/PokeSearch';
import './App.css';


const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';


class App extends Component {

  state = { pokemonData: [] }

  handleSearch = ({ nameSearch, sortField }) => {
    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = this.state.pokemonData

      .filter(pokemon => {
        return pokemon.pokemon.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ pokemonData: searchData });
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemonData: response.body.results });
  
  }

  render() {

    const { pokemonData } = this.state;

    return (
      <div className="App">

        <Header/>

        <PokeSearch onSearch = {this.handleSearch} />

        <main>
          <PokeList listOfPokemon={pokemonData}/> 
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App;
