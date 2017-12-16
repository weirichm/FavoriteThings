// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

	var path = req.url;

	switch(path){

		case"/foods":
			return fs.readFile(__dirname + "/foods.html", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html"});
				res.end(data);
		});

		case"/movies":
			return fs.readFile(__dirname + "/movies.html", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html"});
				res.end(data);
		});

		case"/frameworks":
			return fs.readFile(__dirname + "/frameworks.html", function(err, data) {
				res.writeHead(200, { "Content-Type": "text/html"});
				res.end(data);
		});

		default:
      		return fs.readFile(__dirname + "/home.html", function(err, data) {
        		res.writeHead(200, { "Content-Type": "text/html" });
        		res.end(data);
      });
	}
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
