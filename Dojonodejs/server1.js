var http= require("http");

var server = http.createServer(function  (req,res) {
	res.writeHead(200,{"content-type":"text/html"});
	res.end("<h1>Petición acabo<h1>");
	// body...
});
server.listen(8888);
console.log("Escuchando....");