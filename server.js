var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
    res.send("Welcome to my website");
  });
app.get("/about", function(req, res) {
    res.send("All about me");
});










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });