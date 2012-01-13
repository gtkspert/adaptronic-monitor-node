var MulticastManager = require('./multicast');
var multicastHnd = new MulticastManager();

var clearScreen = '\033[2J';
process.stdout.write(clearScreen);

multicastHnd.socket.on("message",
  function(message, rinfo) {
    packet = JSON.parse(message);
    payload = JSON.parse(packet.payload);
    printStats(payload);
  }
);

multicastHnd.socket.bind('4111', '127.0.0.1'); // */

var tty = require('tty');
var colors = require('colors');
var cli = require('cli'); 
var termsize = tty.getWindowSize();
var DP_X=Math.floor(termsize[1] / 16)
process.on('SIGWINCH', function() {
  termsize = tty.getWindowSize();
  DP_X=Math.floor(termsize[1] / 16)
  process.stdout.write(clearScreen);
  
});


// We must create a: DESC <tab> VAL <tab><tab> DESC <tab> VAL <tab><tab> type arrangement
/*
	123456||12345678||345678||345678
  DESC=8, VAL=8, TAB=8
	
	DESC<TAB>VAL<TAB><TAB>



packet = {"payload":"{\"RPM\":0,\"MAP\":-1,\"MAT\":-128,\"WT\":-128,\"AUXT\":-128,\"AFRA\":149,\"RAFR\":149,\"KNCK\":30,\"TPS\":255,\"IDL\":172,\"BATV\":155,\"MVSS\":0,\"SVSS\":0,\"INJ1\":5476,\"INJ2\":5476,\"INJ3\":5476,\"INJ4\":5476,\"IGN1\":30,\"IGN2\":30,\"IGN3\":30,\"IGN4\":30,\"FTRM\":18,\"TIDL\":0,\"TMAP\":460,\"TAFR\":147,\"GEAR\":0,\"BOV\":0,\"CUF2\":0,\"CUF1\":0,\"CUI2\":0,\"CUI1\":0,\"CLFL\":0,\"IDLE\":0,\"SEND\":1,\"CLTH\":0,\"WOT\":0,\"DIRT\":0,\"IGCR\":0,\"CRNK\":1,\"MUL\":0,\"IGON\":0,\"NOS\":0,\"CTH2\":0,\"WOT2\":0,\"AC\":0,\"ELEC\":1,\"CLUT\":0,\"IGNF\":1,\"TT\":1,\"AC2\":0,\"FP\":0,\"ILOD\":0,\"IRPM\":0,\"IWAT\":0,\"FLOD\":0,\"FRPM\":0,\"FWAT\":0,\"WGDC\":214,\"V2DC\":0,\"V2SP\":0,\"V1DC\":0,\"V1SP\":0,\"EXIN\":-32768,\"DIG7\":1,\"DIG6\":1,\"DIG5\":1,\"DIG4\":1,\"DIG3\":1,\"DIG2\":1,\"DIG1\":1}","checksum":4459097,"timestamp":1325520936205};

var payload = JSON.parse(packet.payload);
// */

function printStats(payload) {
  process.stdout.write('\033[0;0H');
  var i = 0;
  var line="";
  for (var index in payload) {
    if (i == DP_X) {
//      process.stdout.write('\033[K');
      console.log(line)
      line = "";
      i=0;
    }
    i++;
    line += index + ':\t' + payload[index] + '\t';  

  }
  
  console.log(line);    
}
