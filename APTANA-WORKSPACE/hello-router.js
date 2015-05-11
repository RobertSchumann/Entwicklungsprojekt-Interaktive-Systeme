var server = require('node-router').getServer();

server.get("/", function (request, response) {
	resonse.simpleText(200, "Hello World");
});

server.listen(8000, "localhost");