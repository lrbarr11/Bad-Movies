const {addFavorite, removeFavorite} = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre     

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
    
    
    
    apiHelpers.search(req.body)
    .then((movies) => {
      res.send(movies)
    })
    .catch((err) => {
      console.log('error in movie search', err)
      res.sendStatus(500)
    })

  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    
    // send back
    
    apiHelpers.genres(req.body)
    .then((genres) => {
      res.send(genres)
    })
    .catch((err) => {
      console.log('error in getting genres', err)
      res.sendStatus(500)
    })

  },
  saveMovie: (req, res) => {
    addFavorite(req.body, function(err, result){
      if(err){
        res.sendStatus(500)
      }else{
      console.log(result)
      res.sendStatus(200)}
    })

    
  },
  deleteMovie: (req, res) => {
    removeFavorite(req.body, function(err, result){
      if(err){
        res.sendStatus(500)
      }else{
      console.log('removed movie: ', result)
      res.sendStatus(200)
    }
    })
  }
}