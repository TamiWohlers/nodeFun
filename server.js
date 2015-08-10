
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');
var firebase = require('firebase');

//Twilio credentials
var accountSid = ''; 
var authToken = ''; 

///Firebase reference
var ref = new firebase('https://twiliomessagingapp.firebaseio.com/numbers');
 
//require the Twilio module and create a REST client 

var client = twilio(accountSid, authToken); 

var app = express();
var port = 8888;


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

count = 0;
ref.on('child_added', function(data){
	console.log("new child!", data.val());
	count++;
});
ref.once('value', function(snap) {
  console.log("data loaded!", Object.keys(snap.val()).length === count);
});
//EndPoints

app.get('/api/message', function(req, res){
	return res.json(message);
});

app.post('/api/send_text_message', function(req, res){
	client.messages.create({ 
	to: "4064916071", 
	from: "+14062999496", 
	body: req.body.message}, 
	function(err, message) { 
	console.log(message.sid); 
});
});

app.listen(port, function(){
	console.log('I\'m watching you...', port)
});

    



