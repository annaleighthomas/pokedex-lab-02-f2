import { Component } from 'react';
import React from 'react';
import Header from './Header';
import PokeList from '../pokemon/PokeList';
import Footer from './Footer';
import request from 'superagent';
import PokeSearch from '../search/PokeSearch';
import Paging from '../search/Paging.js';
import './App.css';


const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';


class App extends Component {

  state = { pokemonData: [], page: 1, count: 1, perPage: 20 }

  handleSearch = async ({ nameSearch, sortField }) => {
    if (sortField === 'speedValue') {
      const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${nameSearch}&sort=speed&direction=desc`);
      this.setState({ pokemonData: response.body.results, page: 1 });
    } 
    else {
      const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${nameSearch}`);
      this.setState({ pokemonData: response.body.results, page: 1 });
    }
  } 

  changePaging = async (page, nameSearch) => {
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${nameSearch}&page=${page}`);
    this.setState({ pokemonData: response.body.results, page: page });
  }


  async componentDidMount() {
    //this is where i called API 
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemonData: response.body.results, count: response.body.count, perPage: response.body.perPage });
    //this is where i set my state and named it 'pokemonData'
  }

  render() {

    const { pokemonData, page, count, perPage } = this.state;
    // const pokemonData = this.state.pokemonData

    // passing data to PokeList component through props 
      // (listOfPokemon is the prop)
    return (
      <div className="App">

        <Header/>

        <PokeSearch onSubmit={this.handleSearch}/>

        <Paging page={page} count={count} perPage={perPage} onNext={this.changePaging} onPrev={this.changePaging}/>

        
        <main>
          <PokeList listOfPokemon={pokemonData}/> 
        </main>

        <Footer/>

      </div>
    );
  }

}

export default App;
