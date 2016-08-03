var express = require('express');
var app = express();

var http = require('http').Server(app);

app.get('/elete', function(req, res){
	res.send('hello socket.io');
});

http.listen(1337, function(){
	console.log('Server running at port : 1337');
});