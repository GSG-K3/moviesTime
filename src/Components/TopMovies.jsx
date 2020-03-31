import React, { Component } from "react";
function Movie(props) {
  const { id, poster_path, title, vote_average, release_date } = props.item;
  return (
    <li className="MovieBox">
      <img
        src={`http://image.tmdb.org/t/p/w185${poster_path}`}
        alt="movie poster"
      />
      <h1>{title}</h1>
      <h2>{vote_average}</h2>
      <h3>{release_date}</h3>
    </li>
  );
}
class TopMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "baka bayan" };
  }

  render() {
    const topMovies = this.props.movies.slice(0, 4);
    console.log(topMovies);
    const moviesArray = topMovies.map((film) => {
      return <Movie key={film.id.toString()} item={film} />;
    });
    return (
      <section>
        <div className="movies-list">
          {<ul className="row">{moviesArray}</ul>}
        </div>
      </section>
    );
  }
}

export default TopMovies;
