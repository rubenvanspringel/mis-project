var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/web', express.static(__dirname + '/web'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * =================================
 * GET, POST, PUT, DELETE
 * =================================
 */

/**
 * GET: /
 * Return index page
 */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/web/index.html'));
});

app.post('/test', function (req, res) {
    var test = req.body;
});

app.put('/', function (req, res) {
    res.send('PUT requests not permitted.');
});

app.delete('/', function (req, res) {
    res.send('DELETE requests not permitted.');
});

app.listen(8080, function () {
    console.log('Server listening on port 8080')
});