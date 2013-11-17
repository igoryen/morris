// app.js
var express = require('express'), // 10
	  app = express();
var path = require('path'); // 20
var nunjucks = require( "nunjucks" ); // 30
nunjucks.configure('public', { // 31
    autoescape: true, // 32 
    express: app    // 33
});
var routes  = require( "./routes" ); // 40 

app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get("/", routes.pages("index"));

app.listen(1975);
console.log('Listening on port 1975');
