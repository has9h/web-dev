var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write(request.url);          //The request object has a property called url
  response.end();
}).listen(3000);
