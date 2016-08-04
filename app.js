var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));


app.get('/', function(req, res){
	res.sendFile(__dirname +'/views/index.html');
});

io.on('connection', function(socket){
	console.log('user connected');
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(1337, function(){
	console.log('Server running at port : 1337');
});
