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

  async componentDidMount() {
    const response = await 
    request.get(POKEDEX_API_URL);
    this.setState({ pokemonData: response.body.results });
    console.log(response.body.results);
  }

  render() {

    console.log(this.state);

    const { pokemonData } = this.state;

    return (
      <div className="App">

        <Header/>

        <PokeSearch/>

        <main>
          <PokeList pokemon={pokemonData}/> 
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App;
