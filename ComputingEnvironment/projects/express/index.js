var express = require('express')
var app = express()

///////////// WEB ROUTES
app.get('/', function (req, res) {
	res.send('Hi there! I am editing this file!')
})

// HTTP SERVER
var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
})
