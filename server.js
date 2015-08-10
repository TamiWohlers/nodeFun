
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');
//Twilio credentials
var accountSid = 'ACbf1776a1f3f7615f08171cd7bcd962fd'; 
var authToken = '430cdc09c40aaf36bafc3bcfddacc675'; 
 
//require the Twilio module and create a REST client 

var client = twilio(accountSid, authToken); 

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
	client.messages.create({ 
	to: "4064916071", 
	from: "+14062999496", 
	body: "req.body.message",   
	}, function(err, message) { 
	console.log(message.sid); 
});
});
    



