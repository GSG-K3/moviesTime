import React, { Component } from 'react';
import defaultMovieImage from './../images/default_movie.png';
class Movie extends Component {
  OnMovieClick = movie => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=8d220bbf0c754b7fba4f340d43e1633a&language=en-US"`
    )
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        alert(data.original_title + '\n' + data.overview);
      });
  };
  render() {
    const {
      id,
      poster_path,
      title,
      vote_average,
      release_date
    } = this.props.item;
    const path = poster_path
      ? `http://image.tmdb.org/t/p/w185${poster_path}`
      : defaultMovieImage;
    return (
      <li className="MovieBox">
        <img src={path} alt={title} />
        <div className="smallBox">
          <h1>{title}</h1>
          <div className="smallBox__vote">
            <i className="fas fa-star"></i>
            <p>{vote_average}</p>
          </div>
        </div>
        <p>{release_date}</p>
        <button
          className="btn"
          onClick={() => {
            this.OnMovieClick({ id });
          }}
        >
          More Info
        </button>
      </li>
    );
  }
}

export default Movie;
