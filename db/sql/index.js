const sql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = sql.createConnection(mysqlConfig);

connection.connect();

module.exports.connection = connection;
