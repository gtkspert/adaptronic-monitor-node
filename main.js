
var express = require('express');
var app = express.createServer();

var MulticastManager = require('./multicast');
var EcuManager = require('./ecumanager');

var multicastHnd = new MulticastManager();
var ecuHnd = new EcuManager();

multicastHnd.joinMulticast();

// Get next datapoint
setInterval(function() { ecuHnd.performNextRequest(); }, 2000);

// Do what you will with the data
setInterval(function() { multicastHnd.sendMulticast(ecuHnd.ecuData); }, 70); 

// Setup the injection web server

app.get('/datapoints', function(req, res){
  //  EcuManager.dataponts;
  res.send(JSON.stringify(ecuHnd.getDatapoints()));
});

app.post('/inject', function(req, res){
  var data = '';
  req.on('data', function(chunk) { data += chunk; });
  req.on('end', 
    function() {
      var buf = new Buffer(data, 'base64');
      console.log('Injection request: ' + data);
      ecuHnd.once('rawResponse', function(response) {
        console.log('Injection result: ' + response.toString('base64'));
        res.send(response.toString('base64'));
      });
      ecuHnd.injectRequest(buf);
    });

});

app.listen('80');
