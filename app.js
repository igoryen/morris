// app.js
var express = require('express'), // 10
	  app = express();
var path = require('path'); // 20
var nunjucks = require( "nunjucks" ); // 30
var nunjucksEnv   = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' ))); // create the environment for the templating system
var routes  = require( "./routes" ); // 40 
var cwd_name = process.cwd(); // take process.cwd [current working dir] and assign ... to $dirname


// ***** test 1 **********************************
// nunjucks.configure( { autoescape: true } );
// var str = nunjucks.renderString('Hi {{ username }}', { username: 'Yggy' });
// console.log(str); // => in the shell: Hello Yggy


// ***** test 2 *********************************
// nunjucks.configure('views', { autoescape: true });
// nunjucks.render('index.html', { author: 'igoryen' });


// ***** test 3 *********************************
// nunjucks.configure('views', {
//    autoescape: true,
//    express: app
// });

app.configure( function (){
	nunjucksEnv.express( app );
	app.use( express.static( path.join( __dirname  + "/public") ) ); 
  app.use( express.static(cwd_name));  
});


// nunjucks.configure('views', { // 31
//     express: app,    // 33
//     autoescape: true // 32      
// });


app.get("/", routes.pages("index"));
app.get("/about", routes.pages("about"));


app.listen(1975);
console.log('Listening on port 1975');
