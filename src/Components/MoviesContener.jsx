import React, { Component } from 'react';
import Movie from './Movie';

class MoviesContener extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'baka bayan' };
  }

  render() {
    const topMovies = this.props.movies;

    const moviesArray = topMovies.map(film => {
      return <Movie key={film.id.toString()} item={film} />;
    });
    return (
      <section>
        <div className="container">
          <div className="movies-list">
            <h1>{this.props.Name}</h1>
            {<ul className="row movies-contener">{moviesArray}</ul>}
          </div>
        </div>
      </section>
    );
  }
}

export default MoviesContener;
