
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8888;




app.listen(port, function(){
	console.log('I\'m watchinging you...', port)
});

