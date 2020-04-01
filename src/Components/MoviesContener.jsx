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
            {<ul className="row">{moviesArray}</ul>}
          </div>
        </div>
      </section>
    );
  }
}

export default MoviesContener;
