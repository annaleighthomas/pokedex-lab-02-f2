import { Component } from 'react';
import './PokeSearch.css';

export default class PokeSearch extends Component {
  
  state = { nameSearch: '', sortField: '' }

  handleNameFilter = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  // handleSortField = ({ target }) => {
  //   this.setState({ sortField: target.value });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  // componentDidUpdate(prevProp, prevState) {
  //   if (prevState !== this.state) {
  //     this.props.onSearch(this.state);
  //   }
  // }

  render() {
    const { nameSearch, sortField } = this.state;

    return (
      <form className="PokeSearch" onSubmit={this.handleSubmit}>

        <input 
          placeholder="pokemon"
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameFilter}
        />
        {/* 
        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >

          <option value="">sort...</option>
          <option value="">by name</option>
        </select> */}

        <button>Search</button>


      </form>
    );

  }
}