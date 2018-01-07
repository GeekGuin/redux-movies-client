import React, { Component } from 'react';
import SearchBarForm from '../components/search_bar_form';

class SearchBar extends Component {
  state = {term: ''};

  handleChange = (e) => {
    this.setState({term: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand">React Movies</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <SearchBarForm handleChange={ this.handleChange } value={ this.state.term } handleSubmit={ this.handleSubmit } />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SearchBar;