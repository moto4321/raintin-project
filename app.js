const http = require('http');
const express = require('express');
const main = require('./routes/main');
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

const app = express();
const port = 8080;

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/'));
app.set(__dirname + '/');  
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('*', function(req, res){
    res.render('index.html');
});

app.listen(app.get('port'), function() {
  
});
