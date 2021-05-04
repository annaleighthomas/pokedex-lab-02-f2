import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {

  handleNextPage = (e) => {
    let { page } = this.props;
    e.preventDefault();
    this.props.onNext(page + 1);
  };

  handlePreviousPage = (e) => {
    let { page } = this.props;
    e.preventDefault();
    this.props.onPrev(page - 1);
  }

  render() {
    const { page, count, perPage } = this.props;

    return (
      <form className="Paging">

        <button className="prev" onClick={this.handlePreviousPage} disabled={page < 2}>◀</button>
        <span> Page {page} </span>
        <button className="next" onClick={this.handleNextPage} disabled={count < page * perPage}>▶</button>

      </form>
    );
  }

}