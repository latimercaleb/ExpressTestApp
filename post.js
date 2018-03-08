// we need to install request and body-parser with npm first!
// example 4: post requests
var request = require('request');
request.post('http://localhost:88', {
      form: {
            name: "test",
            number: 12
      }
});
// Post route
request.post('http://localhost:88/users', {
      form: {
            name: "test",
            number: 13
      }
});