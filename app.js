var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(4000, function() {
  console.log('App listening on port 4000');
});

module.exports = app;
