import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
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

        <select>
         {this.state.genres.map((genres) => {
           return <option key={genres.id}>{genres.name}</option>
         })}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;