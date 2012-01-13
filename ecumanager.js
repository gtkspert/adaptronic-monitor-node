var datapoints = require('./ecu-datapoints');

var sys = require('sys');
var events = require('events');

var colors = require('colors');

var FC = require('modbus-stack').FUNCTION_CODES;
var ModbusRequest = require('modbus-stack').ModbusRequestStack;
var SerialPort = require('serialport').SerialPort;

var _default_options = {
  'baudrate'  : 57600,
  'port'      : '/dev/ttyUSB0',
  'brokerport': '/dev/ttyUSB1',
  'ecu'       : 'adaptronic'
};

function EcuManager(_options) {
  // Call Events
  events.EventEmitter.call(this);

  // Options Importing and Defaults
  this.options = _options || {};
  this.options.__proto__ = _default_options;
  
  // Setup our SerialPort and Modbus Requesters
  this.serialPort = new SerialPort(this.options.port, { 'baudrate': this.options.baudrate });
  this.ecuRequest = new ModbusRequest(this.serialPort);

  // Setup our variables for storing ecu data
  this.ecuData = {};
  this.rawResponseData = [];

  // Setup some local counter variables
  this.thisRequest = -1;
  this.responseOffset = 0;

  this.injectedRequest = false;

  this.getDatapoints = function getDatapoints() {
    dpbn = {};

    datapoints[this.options.ecu].forEach(
      function (dataspec) {
        dataspec.data.forEach(
          function(dp) {
            dpbn[dp.name] = dp;
          }
        );
      }
    );

    return dpbn;
  }

  // Callbacks for receiving responses
  this.errorCb = function(err) {
    console.log(err.message.bold.red);
  }

  this.responseCb = function(response) {

    //process.stdout.write('-');

    // Use $this for reference to the _super object
    var thisSet = $this.thisRequest;
    var bitCount = 16;
    var responseCnt = 0;


    // Put the response into the rawResponseData variable
    if (thisSet == 0) {
      $this.responseOffset = 0;
    }
    response.forEach(
      function(rawResponsePoint) {
        $this.rawResponseData[$this.responseOffset++] = rawResponsePoint;
      }
    );

    //console.log(datapoints[$this.options.ecu][thisSet])

    // Munge the datapoints into our ecu definition for multicasting
    datapoints[$this.options.ecu][thisSet]['data'].forEach(
      function(datapoint) {
        // If we've gotten 16 bits of data from this response point, move to the next response point
        if (bitCount <= 0) {
          bitCount = 16;
          responseCnt++;
        }

        var thisResponse = response[responseCnt];

        if ($this.debug > 0) {
          datapoint.values = {};
          datapoint.values[datapoint.name] = "0x" + thisResponse.toString(16).toUpperCase();
          console.log(datapoint);
        }

        bitCount -= datapoint['size'];

        if ((typeof(datapoint['skip']) == 'boolean') && (datapoint['skip'] == true)) {
          // Skip this Datapoint
        } else {
          switch (datapoint['size']) {
            case 16:
              thisResponse = (thisResponse & ~(1 << 15)) - (thisResponse & (1 << 15));
            break;

            case 8:
              thisResponse = thisResponse >> bitCount;
              thisResponse &= 0xFF;
            break;

            case 1:
              thisResponse = thisResponse >> bitCount;
              thisResponse &= 1;
            break;

            default:
              console.log(datapoint.size + ' is not a supported datapoint size');
          }

          $this.ecuData[datapoint.name] = thisResponse;

        }
      }
    );

    // Re-run the datapoint getter: setTimeout(this.
    //
  }

  this.injectRequest = function(rawRequest) {
    requestString = rawRequest.toString('base64');
    var $this = this;
    for (key in datapoints[this.options.ecu]) {
      if (typeof(datapoints[this.options.ecu][key].lastResponse) != 'undefined') {
        if (requestString == datapoints[this.options.ecu][key].lastRequest.toString('base64')) {
          console.log('The injection is cached');
          this.emit('rawResponse', datapoints[this.options.ecu][key].lastResponse);
          return;
        }
      }
    }
            
    console.log('Injection is not cached.');
    this.injectedRequest = rawRequest;
  }

  // This function will perform the next request to the ecu
  this.performNextRequest = function() {
    // Request injection
    if (this.injectedRequest != false) {
      // Injected request is next!
      this.ecuRequest.rawRequest(this.injectedRequest);


    } else {
      //process.stdout.write('_');
      this.thisRequest++;
      if (this.thisRequest >= datapoints[this.options.ecu].length) {
        this.thisRequest = 0;
      }

      datapoints[this.options.ecu][this.thisRequest].lastRequest = this.ecuRequest.request(FC.READ_HOLDING_REGISTERS, datapoints[this.options.ecu][this.thisRequest].start, datapoints[this.options.ecu][this.thisRequest].count);
    }
  }

  // Specifiy the callback functions for the response events
  // Error doesn't need to have its reference to this, because it just logs to display
  this.ecuRequest.on('error', this.errorCb);

  // Specify a local copy of this, for use in responseCb
  var $this = this;
  this.ecuRequest.on('response', function(val) { $this.responseCb(val); });

  this.ecuRequest.on('rawResponse', function(buf) { 
    if ($this.injectedRequest) {
      $this.emit('rawResponse', buf);
      $this.injectedRequest = false;
    } else {
      datapoints[$this.options.ecu][$this.thisRequest].lastResponse = buf;
    }
  });

}

sys.inherits(EcuManager, events.EventEmitter);


module.exports = EcuManager;




