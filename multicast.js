
require('./Adler32');
var dgram = require('dgram');

var _default_options = {
  'loopbackEnabled'   : true,
  'multicastInterface':  'eth0',
  'multicastInterval' : 200,
  'multicastAddress'  : '239.255.0.10',
  'multicastPort'     : '4111'
};

function multicastWrapper(_options) {

  this.options = _options || {};
  this.options.__proto__ = _default_options;

  this.socket = dgram.createSocket('udp4');

  this.joinMulticast = function() {
    this.socket.addMembership(this.options.multicastAddress, this.options.multicastInterface);
  }

  this.sendMulticast = function(payload) {
    // Build the packet
    var packet = { "payload":JSON.stringify(payload) };
    packet.checksum = Adler32.encode(packet.payload);

    var dateHnd = new Date();
    packet.timestamp = dateHnd.getTime();
    
    // Convert the packet to a buffer
    var message = new Buffer(JSON.stringify(packet) + "\n");

    this.socket.send(message, 0, message.length, this.options.multicastPort, this.options.multicastAddress);
    
    if (this.options.loopbackEnabled) {
      this.socket.send(message, 0, message.length, this.options.multicastPort, '127.0.0.1');
    }

  }

}


module.exports = multicastWrapper;


