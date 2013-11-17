var express = require('express'),
	  app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + "/public")));


app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(1975);
console.log('Listening on port 1975');
