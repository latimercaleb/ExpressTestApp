// Main server file
// Including the express dependency in the code
var express = require('express');
var parseTool = require('body-parser');
var cors = require('cors');
// Create server and assign a local port to it
var app = new express();
var data = {
      details: [2, 12, 135, 1]
};
app.use(cors()); // App is now cross-origin compatible, I should test this.
app.use(parseTool.json());
app.use(parseTool.urlencoded({
      extemded: false
}));
app.get('/', function(req, res) {
      // route: path from directory
      // request:  info that's coming in from the sender of the request
      // response: the way the server responds to this request

      // example 1: sending text
      //res.status(200).send("Testing"); // return a status, and send something with that. Right now it's text, irl it'll be data or a page

      //example 2: sending data, data sends in json format
      res.status(200).json(data);
});

app.post('/', function(req, res) {
      // req.body will contain parameters that come with request.body
      var params = req.body;
      console.log(params);
});
// example 3: sending a directory
app.use('/home', express.static('app')); // this uses express.static as middle ware, middle ware are functions that express runs on requests before your own functions


app.listen(88); // running node server.js will give it life
// Example 5: Routes
var users = [{
            name: "Caleb",
            id: 0
      },
      {
            name: "Jill",
            id: 1
      },
      {
            name: "Yiddi",
            id: 2
      }
];
app.route('/users')
      .get(function(req, res) {
            res.status(200).json(users);
      })
      .post(function(req, res) {
            users = req.body
      });

// Example 6: Rest API, endpoint that refers to a collection of things
app.route('/users/:id')
      .get(function(req, res) {
            console.log(req.params);
            var user = users.filter(function(user) {
                  console.log(typeof req.params.id, typeof user.id);
                  return +user.id === +req.params.id;
            })[0];
            if (user) {
                  res.status(200).json(user);
            }
            if (!user) {
                  res.status(404).send();
            }
      })
      .patch(function(req, res) {
            console.log(req.params);
            var user = users.filter(function(user) {
                  console.log(typeof req.params.id, typeof user.id);
                  return +user.id === +req.params.id;
            })[0];
            var params = req.params;
            for (key in params) {
                  user[key] = params[key];
            }
      })
      .delete(function() {

      })


module.exports = app;