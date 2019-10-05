import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };
    
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.handleGenreSearch = this.handleGenreSearch.bind(this);
  }

  getMovies(movie) {
    console.log('getMovies: ', movie)
  axios(
    {
    method: "post",
    url: '/movies/search',
    data: {searched: movie}
  })
    .then((movies) => {
      this.setState({
        movies: movies.data
      })
    })
    .catch((err) => {
      console.log('failed to get movies: ', err);
    })
  }

  handleGenreSearch(e, id) {
    e.preventDefault();
    console.log()
    axios({
      method: 'get',
      url: '/movies/search/genres',
      params: id
    })
    .then((movies) => {
      this.setState({
        movies: movies.data
      })
    })
    .catch((err) => {
      console.log('error in handle genre search: ', err);
    })
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies} handleGenreSearch={this.handleGenreSearch}/>
          <Movies allMovies={this.state.movies} movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));