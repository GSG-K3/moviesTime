import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieSearcher from './MovieSearcher';

export default class MovieHeader extends Component {
  state = {
    showSearch: false
  };
  onMovieSearchChange = data => {
    this.props.onMovieSearchChange(data);
  };

  NavLinkClickHandler = e => {
    console.log(e.target.id);
    if (e.target.id === 'drowse') {
      this.setState({ showSearch: true });
    } else {
      this.setState({ showSearch: false });
    }
  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="row justify-space-between">
            <div className="header__title">
              <span />
              <h1>Movies</h1>
            </div>
            <ul className="nav-links">
              <Link to="/">
                <li onClick={this.NavLinkClickHandler} id="home">
                  Home
                </li>
              </Link>
              <Link to="/Browse">
                <li onClick={this.NavLinkClickHandler} id="drowse">
                  Browse Movies
                </li>
              </Link>
            </ul>

            <MovieSearcher
              onMovieSearchChange={this.onMovieSearchChange}
              showSearch={this.state.showSearch}
            />
          </nav>
        </div>
      </header>
    );
  }
}
