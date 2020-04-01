import React, { Component } from 'react';
import MovieSearcher from './MovieSearcher';
class MovieHeader extends Component {
  onMovieSearchChange = data => {
    this.props.onMovieSearchChange(data);
  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row justify-space-between">
            <div className="header__title">
              <span />
              <h1>Movies</h1>
            </div>
            <MovieSearcher onMovieSearchChange={this.onMovieSearchChange} />
          </div>
        </div>
      </header>
    );
  }
}

export default MovieHeader;
