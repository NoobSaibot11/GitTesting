var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World from app 1'); //write a response to the client
  res.end();    //end the response
}).listen(3000);  //the server object listens on port 80