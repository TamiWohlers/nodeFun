
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
var port = 8888;




app.listen(port, function(){
	console.log('I\'m watching you...', port)
});

//MiddleWare

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());
var message = {
	"message" : "Hello World!!"
};
//EndPoints

app.get('/api/message', function(req, res){
	return res.json(message);
});

app.post('/api/send_text_message', function(req, res){
    console.log(req.body.message);
    res.send();
});


