import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieHeader from './Components/MovieHeader';
import MoviesContener from './Components/MoviesContener';

class App extends Component {
  state = {
    movies: [],
    searchMovies: [],
    page: 1,
    totalPages: null,
    scrolling: false
  };

  loadMovies = () => {
    const { page, movies } = this.state;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&page=${page}`
    )
      .then(Response => {
        return Response.json();
      })
      .then(data =>
        this.setState({
          movies: [...movies, ...data.results],
          scrolling: false,
          totalPages: data.total_pages
        })
      );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadMovies
    );
  };

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;

    if (scrolling) return;
    if (totalPages <= page) return;
    const lastLi = document.querySelector('ul.movies-contener > li:last-child');
     if (lastLi) {
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) this.loadMore();
     }
  };

  componentDidMount() {
    this.loadMovies();
    this.scrollingListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  onMovieSearchChange = searchData => {
    this.setState({ searchMovies: searchData });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <MovieHeader onMovieSearchChange={this.onMovieSearchChange} />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <MoviesContener movies={this.state.movies} />}
            />

            <Route
              path="/Browse"
              component={() => (
                <MoviesContener movies={this.state.searchMovies} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
