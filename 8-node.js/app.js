// console.log("Hello");
//
// function greeting(greet){
//   console.log(greet);
// }
//
// greeting("Hello World");

var http = require('http');   //Including a node_module, which is included in the system
var hostName = '127.0.0.1';
var port = 8080;
var server = http.createServer(function(request, response){
  response.statusCode = 200;
});
