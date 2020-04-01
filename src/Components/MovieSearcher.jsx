import React, { Component } from 'react';

let url =
  'https://api.themoviedb.org/3/search/movie?api_key=59dcb15a70dba6bcabb88c4ebf99f8ae&query=';
class MovieSearcher extends Component {
  state = {
    searchValue: '',
    searchLoaderClass: 'search-loader'
  };

  onSearchChange = e => {
    this.setState({ searchValue: e.target.value });
    if (e.target.value.length >= 3) {
      this.setState({ searchLoaderClass: 'search-loader show' });

      fetch(url + e.target.value)
        .then(res => res.json())
        .then(data => {
          this.props.onMovieSearchChange(data.results);
          this.setState({
            searchLoaderClass: 'search-loader'
          });
        })
        .catch(err => {
          alert('Sorry  some Error Happened');
          console.log(err);
        });
    } else {
      this.setState({ searchLoaderClass: 'search-loader' });
    }
  };

  render() {
    return (
      <section>
        <div className="header__Search">
          <input
            placeholder="Quick search"
            name="search"
            id="search"
            autoComplete="off"
            type="text"
            value={this.state.searchValue}
            onChange={this.onSearchChange}
          />
          <div className={this.state.searchLoaderClass}></div>
        </div>
        <div></div>
      </section>
    );
  }
}

export default MovieSearcher;
