var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server Running');

app.get('/', function(request, response){
  response.sendFile(__dirname+'/index.html');
});

// Set public/static folder:
app.use(express.static(path.join(__dirname, 'static')));

io.sockets.on('connection', function(socket){
  // All the events that are needed to be emitted will go here
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect:
  socket.on('disconnect', function(data){
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected', connections.length);
  });

  // Send Message
  socket.on('send message', function(data){
    console.log(data);
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  // New User:
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames(){
    io.sockets.emit('get users', users);
  }
});
