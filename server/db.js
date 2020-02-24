const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'inventory'
});

connection.connect();

const retrieveSimilarProducts = callback => {
  connection.query('SELECT * FROM products WHERE category= ORDER BY RAND() LIMIT 10', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const retrieveTopTen = callback => {
  connection.query('SELECT * FROM products ORDER BY views DESC LIMIT 10', (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {connection, retrieveSimilarProducts, retrieveTopTen};
