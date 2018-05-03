/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

var express = require('express');
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Portfolio'
});

var app = express();
var port = 8080;
var bodyParser = require('body-parser');

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
  var query = "INSERT INTO ??(??,??) VALUES (?,?)";
  var inserts = ['comment', 'author', 'body', req.body.author, req.body.body];
 
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
