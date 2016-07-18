const http = require('http');

const port = 1337;
const hostname = '127.0.0.1';

const server = http.createServer(function(req, res){
		res.statusCode = 200;
		res.setHeader('Content-Type' , 'text/plain');
		res.end('Hello World!');
	});

server.listen(1337,'127.0.0.1', function(){
	console.log('server running at : '+ hostname+':'+port);
});
