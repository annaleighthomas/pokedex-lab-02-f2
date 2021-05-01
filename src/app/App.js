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

  handleSearch = async ({ nameSearch, sortField }) => {
    if (sortField === 'speedValue') {
      const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${nameSearch}&sort=speed&direction=desc`);
      this.setState({ pokemonData: response.body.results });
    } 
    else {
      const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${nameSearch}`);
      this.setState({ pokemonData: response.body.results });
    }
  } 

  // handleSort = async ({ sortField }) => {
  //   const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=speed&direction=desc${sortField}`);
  //   this.setState({ pokemonData: response.body.results });
  // }

  async componentDidMount() {
    //this is where i called API 
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemonData: response.body.results });
    //this is where i set my state and named it 'pokemonData'
  }

  render() {

    const { pokemonData } = this.state;
    // const pokemonData = this.state.pokemonData

    // passing data to PokeList component through props 
      // (listOfPokemon is the prop)
    return (
      <div className="App">

        <Header/>

        <PokeSearch onSearch={this.handleSearch} />

        
        <main>
          <PokeList listOfPokemon={pokemonData}/> 
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App;
