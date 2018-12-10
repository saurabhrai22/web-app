var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true })); 
var port = process.env.PORT || 5005;
app.use(function(req, res, next) {
  res.type('application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

app.get('/',function(req, res) {
	res.json({ status : 'Main Route Working..!' });
});

app.post('/createJsonFile', function(req, res) {
	var fileName = req.body.fileName;
	var dataset = req.body.dataset;
	var file = 'dist/json-files/'+fileName+'.json'
	fs.writeFileSync(file, JSON.stringify(dataset),{spaces: 2, EOL: '\r\n'});
	res.json({ data: 'success' })
});

app.listen(port);
console.log('Listening at port: ',port);