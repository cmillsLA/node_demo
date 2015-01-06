var express    = require('express');
var app        = express();
var router = express.Router();
var hbs = require('hbs');
/*var bodyParser = require('body-parser');

var fs = require("fs");
var handlebars = require("handlebars");*/

app.use(router);
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));

app.engine('hbs', hbs.__express);
app.engine('html', hbs.__express);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.localsAsTemplateData(app);

/***** Views *****/
// Homepage.
app.get('/', function(req, res) {

  res.render('index.html');

});

// Sub Page.
app.get('/view', function(req, res) {

  res.render('view.html');

});

/***** APIs *****/
// Webpagetest API.
app.get('/api/test', function(req, res) {

	console.log('test');
	res.json('test');

});

/**** DEMO with handlebars functionality *****/
/*app.get('/test', function(req, res) {
  res.render('test.html', {
    message: 'Homepage!'
  });
});*/
/**** /DEMO with handlebars functionality *****/

/***** Start App, local or openshift *****/
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});