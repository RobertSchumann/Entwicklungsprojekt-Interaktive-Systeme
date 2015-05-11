var net = require('net');
var sys = require('sys');

var server = net.createServer(function (socket) {
	sys.puts("Connection from " + socket.remoteAddress);
	socket.write("Hello World\n");
	socket.addListener("data", function (data) {
	socket.end(data);
});
});
  
  server.listen(7000, "localhost");
  
  console.log("TCP server listening on port 7000 on localhost.");