//Libaries that are needed for this application
var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//Connection details for making a connection to the database
var connection = mysql.createConnection({
  host: "160.153.129.234",
  user: "admin_Heather",
  password: "Carter12",
  database: "onceuponalimeBlog"
});

//Connecting to the database and confirming with a message to the console
connection.connect(function(err) {
  if(err) throw err
  console.log('You are now connected...')
});

//Application should use the bodyparser on json files and Urls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Start the server that is going to listen out for requests
//This will use the enviroment port or port 3000
//When Listening a message is printed to the console
var server = app.listen(process.env.port || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});

//Rest api to get all the posts from the database
app.get('/Blog', function (req, res) {
  //console.log(req);
  connection.query('SELECT * FROM tbl_post', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log(JSON.stringify(results[1].title));
    console.log(JSON.stringify(results[1].content));
    console.log(JSON.stringify(results[1].date));

  });
});
