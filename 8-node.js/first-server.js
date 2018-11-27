var http = require('http');
var dateTime = require('./first-module');            //Including self-made module

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('The date and time is currently: ' + dateTime.myDateTime());
  response.write(request.url);                        //Write the url that's inserted
  console.log(dateTime);
  response.end();
}).listen(8080);
