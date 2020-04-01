import React, { Component } from "react";
import "./App.css";
import MoviesContener from "./Components/MoviesContener";
import "./TopMovies.css";

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        this.setState({ movies: data.results });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>movies</h1>
        <MoviesContener movies={this.state.movies.slice(0, 4)} />
      </div>
    );
  }
}

export default App;
