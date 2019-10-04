//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {

    addFavorite: (req, callback) => {
        sqlDb.query('INSERT INTO favorites (movies) VALUES ('+req.body+')', function(err, results){
            if(err){
                console.log('error in insert: ', err)
                callback(err, null)
            } else{
                callback(null, results)
            }
        });
    },

    removeFavorite: (req, callback) => {
        sqlDb.query('DELETE FROM favorites WHERE movies = \'' + req.body +'\'', function(err, results){
            if(err){
                console.log('error in remove: ', err)
                callback(err, null)
            } else {
                callback(null, results)
            }
        });
    }

}

