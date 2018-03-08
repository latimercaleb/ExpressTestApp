// Test file must have save name as file to test then .spec
// Next install, mocha, supertest & chai. mocha is run from cli so it doesn't get an include

var request = require('supertest');
var app = require("./server.js");
var assert = require('chai').assert;

describe("app REST api", function() {
      it("Returns users array with route", function(done) {
            request(app)
                  .get('/users')
                  .expect(200)
                  .end(function(req, res) {
                        var contacts = res.body;
                        assert.isArray(contacts);
                        done();
                  });
      })
})