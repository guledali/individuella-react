/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const mysql = require("mysql");
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Portfolio'
});

const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);


let res;
  
app.get('/comment', function (req, res) {
  connection.query('SELECT * FROM `comment`', [], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
  
  res.json(results);
  
});
});

app.post('/comment', function (req, res) {
  const query = "INSERT INTO ??(??,??) VALUES (?,?)";
  const inserts = ['comment', 'author', 'body', req.body.author, req.body.body];
  sql = mysql.format(query, inserts); 
  query = mysql.format(query,inserts);
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    } else {
        res.json({"Error" : false, "Message" : "Comment Added !"});
    }
});
});  

console.log(`App listening on port ${port}`);
