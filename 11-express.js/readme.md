# Express.js

* Minimalistic, open source web framework for Node.js
* Used to build web applications and applications
* Uses MVC concepts
  * Controllers are used to direct traffic and load views
  * Models are used for data storage and databases
  * Views for displaying user interface

### Purpose of using Express.js with Node.js:

* **Node.js is a platform for building server-side event-driven I/O application using JS**
* **Express.js is a framework based on node.js for building web-application using principles and approaches of node.js**

[Reference Material](https://stackoverflow.com/questions/12616153/what-is-express-js)

[Node Frameworks](http://nodeframework.com/)

You don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. With Express.js it there for you to use.

## Stuff in Express.js

* Setup - Creating package.json file and including dependencies
* Middleware
* Routing - Handling incoming HTTP requests and route to a template engines
* Template engines - EJS, Handlebars, Jade/Pub
* Forms & Inputs
* Models, ORM & Databases - MongoDB(Using Mongoose, or Mongo.js)
* Express Generator - Prototyping quick boilerplate applications

Express.js basically helps you manage everything, from routes, to handling requests and views.

### Packages & Modules Used:

* `http`
* `express`
* `nodemon`: Use and install `nodemon` to avoid manually restarting servers to view changes
* `body-parser`
* `path`
* `ejs`
* `express-validator`

### On Routing:

[Routing Referece](https://expressjs.com/en/guide/routing.html)

Routing refers to how an application’s endpoints (URIs) respond to client requests, and a specific HTTP request method(GET, POST, and so on). For an introduction to routing, see [Basic routing](https://expressjs.com/en/starter/basic-routing.html).

Route definition takes the following structure:

````
app.METHOD(PATH, HANDLER)
````
where

* `PATH` is a path on the server.
* `HANDLER` is the function executed when the route is matched.

### On `path`:

[Path Reference](https://www.w3schools.com/nodejs/ref_path.asp)

In Node.js, `__dirname` is always the directory in which the currently executing script resides.
So the value of `__dirname` into `/d1/d2/myScript.js` would be `/d1/d2`

### On body-parser:

To handle `HTTP POST` request in Express.js version 4 and above, you need to install middleware module called `body-parser`.

`body-parser`: **extract the entire body portion of an incoming request stream and exposes it on `req.body`**.

The middleware was a part of Express.js earlier but now you have to install it separately.

This `body-parser` module parses the JSON, buffer, string and URL encoded data submitted using `HTTP POST` request.

### On `app.set()` and `app.get()`:

[app.set(name, value)](http://expressjs.com/en/4x/api.html#app.set)

`app.set(name, data)` stores a named property on the `app` object that can be retrieved later with `app.get(name)`

### On `express.static`:

Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware:

````
app.use(express.static('public'));
````

### On `bodyParser.urlencoded([options])`:

The `urlencoded` function takes an optional options object that may contain any of the following keys:

* extended
* inflate
* limit
* parameterLimit
* type
* verify
