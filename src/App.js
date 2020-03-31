import React, { Component } from "react";
import "./App.css";
import TopMovies from "./Components/TopMovies";
import "./TopMovies.css";
import MovieHeader from "./Components/MovieHeader";

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
        <MovieHeader />
        <TopMovies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
