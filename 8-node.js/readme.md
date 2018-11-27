# Node.js

[An Introduction to Node.js, the Server Side JavaScript](https://opensourceforu.com/2016/01/an-introduction-to-node-js-the-server-side-javascript/)

[Node Frameworks](http://nodeframework.com/)

* JS runtime environment built on Chrome's V8 JS engine -> Which is written in C++
* JS running on the server
* Used for Scalable web applications
* Uses an event-driven, non-blocking I/O Model
* Works on a single thread
* EventEmitter class is used to bind events and event listeners
* Node.js can create, open, read, write, delete, and close files on the server
* Node.js can collect form data
* Node.js can add, delete, modify data in your database

## Stuff you can build with node.js

* REST APIs: To accept GET requests and serve to a client, or POST requests
* Backend applications
* Chat, CMS
* Utilities, tools

## npm

*Read the "On modules" section for details about modules*

* Used to install node modules/programs
* Installed into node_modules folder
* Popular modules:
  * Express - Complete web development framework for Node.js
  * Connect - Extensible HTTP server framework(Baseline for express.js)
  * Socket.io - Server side component for websockets
  * Pug/Jade - Template engine inspired by HAML(Templating system to avoid writing inline code): Default for express.js
  * Mongo/Mongoose - Wrappers to interact with MongoDB
  * Coffee-script - CofeeScript(Superset of JS) compiler
  * Redis - Redis(NoSQL database + caching system) client library

## package.json

* File used in node packages/applications
* Goes in the root of your package/application
* Tells npm how your package is structured and what to do to install it
  * "main": File that is the entrypoint for the application
  * dependencies: Modules that you want to use in your app, along with the versions(^ stands for latest version)
* npm init sets it up for you

## On modules

What is a module? Consider modules to be the same as JavaScript libraries: A set of functions you want to include in your application. Node.js has a set of built-in modules which you can use without any further installation: [Built-in Modules Reference](https://www.w3schools.com/nodejs/ref_modules.asp)

To include a module, use the `require()` function with the name of the module

### Create and include your own modules

Create a module that returns the current date and time:
````
exports.myDateTime = function () {
    return Date();
};
````
Use the `exports` keyword to make properties and methods available outside the module file

The `req` argument represents a request from the client, as an object. This object has a property called "url" which holds the part of the url that comes after the domain name: *See first-server.js file for more info*

[Continue lesson from here](https://www.w3schools.com/nodejs/nodejs_http.asp)

## On `require('http')`

> HTTP is the protocol that web browsers and web servers use to communicate with each other over the Internet. It is an application level protocol because it sits on top of the TCP layer in the protocol stack and is used by specific applications to talk to one another. In this case the applications are web browsers and web servers. - [How does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

An easy way to think of modules is to think of them as libraries. They add additional functionality into your application based on which modules you decide to import and use.

The http module is most beneficial in node.js when you need to make a request over the hyper text transfer protocol. For example, if you want to send a `post` request or `get` request to a specific URL, you can't use something like `ajax` which only works in the frontend. You will need to use the `http module` in order to do something like this (or use a related module but http is one of the more common ones).

The http module also has additional functionality such as creating a server or managing sockets.

## EventEmitters & Streams in node.js

> Emitters are objects that cause `Function` objects('listeners') to be called. All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event. - [Events - Node.js Documentation](https://nodejs.org/api/events.html)

Objects in node.js can fire events, like the readStream object fires events when opening and closing a file.

[Streams - Node.js Documentation](https://nodejs.org/api/stream.html)

*The following is taken from [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)*

A Web Server object is created by using `createServer`:

````
const http = require('http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
````
The function that's passed in to `createServer` is called once for every HTTP request that's made against that server, so it's called the request handler. In fact, the `Server` object returned by `createServer` is an `EventEmitter`, and what we have here is just shorthand for creating a server object and then adding the listener later:

````
const server = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
});
````
When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, `request` and `response`.

In order to actually serve requests, the `listen` method needs to be called on the server object. In most cases, all you'll need to pass to `listen` is the port number you want the server to listen on. There are some other options too, so consult the API reference.
