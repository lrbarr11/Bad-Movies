//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {

    addFavorite: (req, callback) => {
        sqlDb.connection.query('INSERT INTO favorites (movie) VALUES (\''+req.title+'\')', function(err, results){
            if(err){
                console.log('error in insert: ', err)
                callback(err, null)
            } else{
                callback(null, results)
            }
        });
    },

    removeFavorite: (req, callback) => {
        sqlDb.connection.query('DELETE FROM favorites WHERE movie = \'' + req.title +'\'', function(err, results){
            if(err){
                console.log('error in remove: ', err)
                callback(err, null)
            } else {
                callback(null, results)
            }
        });
    },

    getAll: (callback) => {
        sqlDb.connection.query('SELECT movie FROM favorites', function(err, results){
            if(err){
                console.log('error in getting all favorites: ', err)
                callback(err, null);
            }else {
                callback(null, results)
            }
        })
    }

}

