// console.log("Hello");
//
// function greeting(greet){
//   console.log(greet);
// }
//
// greeting("Hello World");

var http = require('http');   //Including a node_module, which is included in the system
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

fs.readFile('readme.md', function(error, file){
  if(error){
    throw error;
  }
  var server = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.write(file);
    response.end('Hello World');
  });

  server.listen(port, hostname, function(){
    console.log('Server started on port ' + port);
  });
});
