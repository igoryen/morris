var express = require('express'),
	  app = express();
var path = require('path');
var routes  = require( "./routes" );

//***** app.use ***********************************
app.use(express.static(path.join(__dirname + "/public")));
//***** app.use ***********************************


//***** app.get ***********************************
app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get("/", routes.pages("index"));
//***** app.get ***********************************

app.listen(1975);
console.log('Listening on port 1975');
