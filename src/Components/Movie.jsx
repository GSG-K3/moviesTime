import React, { Component } from "react";

class Movie extends Component {
  OnMovieClick = (e) => {
    alert("click movie");
  };
  render() {
    const {
      id,
      poster_path,
      title,
      vote_average,
      release_date
    } = this.props.item;
    return (
      <li className="MovieBox">
        <img
          src={`http://image.tmdb.org/t/p/w185${poster_path}`}
          alt="movie poster"
        />
        <div className="smallBox">
          <h1>{title}</h1>
          <i class="fas fa-star"></i>
          <p>{vote_average}</p>
        </div>
        <p>{release_date}</p>
        <button className="btn" onClick={this.OnMovieClick}>
          more Information
        </button>
      </li>
    );
  }
}

export default Movie;
