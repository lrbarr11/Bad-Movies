import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      genre: {},
      searched: '',
    };
    this.getGenres = this.getGenres.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  getGenres() {
    axios.get('/movies/genres')
    .then((genres) => {
      console.log('genres: ',genres.data);
      this.setState({
        genres: genres.data
      })
    })
  }

  selectGenre(e) {
    console.log('selecting genre: ', e.target.value);
    this.setState({
      genre: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();   
    this.props.getMovies(this.state.searched)
  }

  handleChange(e){
    console.log('searched: ', e.target.value);
    this.setState({
      searched: e.target.value
    })
  }

componentDidMount(){
  this.getGenres();
}

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select value={this.state.genre} onChange={this.selectGenre} >
         {this.state.genres.map((genres) => {
           return <option key={genres.id} value={{id:genres.id, name: genres.name}}>{genres.name}</option>
         })}
        </select>
        <br/><br/>
        <button onClick={(event) => this.props.handleGenreSearch(event, this.state.genres.id)}>Search Genre</button>
         <form onSubmit={this.handleSubmit}>
           <input type='text' placeholder='Search Movies' onChange={this.handleChange}/>
           <button onClick={this.handleSubmit}>Search</button>
         </form>

      </div>
    );
  }
}

export default Search;