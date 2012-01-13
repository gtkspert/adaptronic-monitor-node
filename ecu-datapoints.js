var datapoints = {};

datapoints.dump = function(ecuSpec) {
  datapoints[ecuSpec].forEach(
    function (getter) {
      getter.data.forEach(
        function (thisDp) {
          if (!thisDp.skip) {
            console.log(thisDp.name + ":\t" + thisDp.desc);
          }
        }
      );
    }
  );
};
/*
Math variable is:
  0: No Math
  1: Divide
  2: Multiply
// */

datapoints["adaptronic"] = 
[
  {
    "start" : 4096,
    "count" : 22,
    "data"  : [
      {
        "name"    : "RPM",
        "desc"    : "Current RPM",
        "size"    : 16,
        "min"     : 0,
        "max"     : 10000,
      },
      {
        "name"    : "MAP",
        "desc"    : "Manifold Air Pressure (kPa)",
        "size"    : 16,
        "min"     : 0,
        "max"     : 300,
      },
      {
        "name"    : "MAT",
        "desc"    : "Manifold Air Temperature (deg C)",
        "size"    : 16,
        "min"     : -32,
        "max"     : 125,
      },
      {
        "name"    : "WT",
        "desc"    : "Water Temperature (dec C)",
        "size"    : 16,
        "min"     : -32,
        "max"     : 125,
      },
      {
        "name"    : "AUXT",
        "desc"    : "Auxiliary Temperature (deg C)",
        "size"    : 16,
        "min"     : -32,
        "max"     : 125,
      },
      {
        "name"    : "AFRA",
        "desc"    : "Air to Fuel Ratio (Analog)",
        "size"    : 8,
        "illegal" : [ 0xff ],
        "min"     : 9.4,
        "max"     : 20.0,
        "math"    : 1,
        "mathBy"  : 10,
      },
      {
        "name"    : "RAFR",
        "desc"    : "Air to Fuel Ratio (Actual)",
        "size"    : 8,
        "illegal" : [ 0xff ],
        "min"     : 9.4,
        "max"     : 20.0,
        "math"    : 1,
        "mathBy"  : 10,
      },
      {
        "name"    : "KNCK",
        "desc"    : "Knock Value",
        "size"    : 16,
        "min"     : 0,
        "max"     : 255,
      },
      {
        "name"    : "TPS",
        "desc"    : "Throttle Position Sensor",
        "size"    : 16,
        "illegal" : [ 0x00ff, 0xffff ],
        "min"     : 0,
        "max"     : 100,
      },
      {
        "name"    : "IDL",
        "desc"    : "Idle Duty Cycle",
        "size"    : 16,
        "min"     : 0,
        "max"     : 255,
      },
      {
        "name"    : "BATV",
        "desc"    : "Battery Voltage",
        "size"    : 16,
        "min"     : 0,
        "max"     : 20,
      },
      {
        "name"    : "MVSS",
        "desc"    : "Master VSS (km/h)",
        "size"    : 16,
        "min"     : 0,
        "max"     : 220,
      },
      {
        "name"    : "SVSS",
        "desc"    : "Secondary VSS (km/h)",
        "size"    : 16,
        "min"     : 0,
        "max"     : 220,
      },
      {
        "name"    : "INJ1",
        "desc"    : "Injector 1 PulseWidth",
        "size"    : 16,
        "min"     : 0,
        "max"     : 20,
        "math"    : 1,
        "mathBy"  : 1500,
      },
      {
        "name"    : "INJ2",
        "desc"    : "Injector 2 PulseWidth",
        "size"    : 16,
        "min"     : 0,
        "max"     : 20,
        "math"    : 1,
        "mathBy"  : 1500,
      },
      {
        "name"    : "INJ3",
        "desc"    : "Injector 3 PulseWidth",
        "size"    : 16,
        "min"     : 0,
        "max"     : 20,
        "math"    : 1,
        "mathBy"  : 1500,
      },
      {
        "name"    : "INJ4",
        "desc"    : "Injector 4 PulseWidth",
        "size"    : 16,
        "min"     : 0,
        "max"     : 20,
        "math"    : 1,
        "mathBy"  : 1500,
      },
      {
        "name"    : "IGN1",
        "desc"    : "Ignition Timing 1 (Deg BTDC)",
        "size"    : 16,
        "min"     : -10,
        "max"     : 60,
        "math"    : 2,
        "mathBy"  : 0.2,
      },
      {
        "name"    : "IGN2",
        "desc"    : "Ignition Timing 2 (Deg BTDC)",
        "size"    : 16,
        "min"     : -10,
        "max"     : 60,
        "math"    : 2,
        "mathBy"  : 0.2,
      },
      {
        "name"    : "IGN3",
        "desc"    : "Ignition Timing 3 (Deg BTDC)",
        "size"    : 16,
        "min"     : -10,
        "max"     : 60,
        "math"    : 2,
        "mathBy"  : 0.2,
      },
      {
        "name"    : "IGN4",
        "desc"    : "Ignition Timing 4 (Deg BTDC)",
        "size"    : 16,
        "min"     : -10,
        "max"     : 60,
        "math"    : 2,
        "mathBy"  : 0.2,
      },
      {
        "name"    : "FTRM",
        "desc"    : "Fuel Trim (%)",
        "size"    : 16,
        "min"     : 0,
        "max"     : 100,
      }
    ]
  },
  {
    "start" : 4138,
    "count" : 17,
    "data"  : [
      {
        "name"    : "TIDL",
        "desc"    : "Target Idle RPM",
        "size"    : 16,
        "min"     : 0,
        "max"     : 10000,
      },
      {
        "name"    : "TMAP",
        "desc"    : "Target Manifold Pressure",
        "size"    : 16,
        "min"     : 0,
        "max"     : 400,
      },
      {
        "name"    : "TAFR",
        "desc"    : "Target Air to Fuel Ratio",
        "size"    : 16,
        "min"     : 9.4,
        "max"     : 20,
        "math"    : 1,
        "mathBy"  : 10,
      },
      {
        "name"    : "GEAR",
        "desc"    : "Current Gear",
        "size"    : 8,
        "min"     : 0,
        "max"     : 10,
      },
      {
        "name"    : "BOV",
        "desc"    : "Blow-Off-Valve State",
        "size"    : 8,
        "min"     : 0,
        "max"     : 255,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skips a certain number of bits",
        "size"    : 12,
        "skip": true,
      },
      {
        "name"    : "CUF2",
        "desc"    : "Fuel 2 Cutting State",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CUF1",
        "desc"    : "Fuel 1 Cutting State",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CUI2",
        "desc"    : "Ignition 2 Cutting State",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CUI1",
        "desc"    : "Ignition 1 Cutting State",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skips a certain number of bits",
        "size"    : 7,
        "skip"    : true
      },
      {
        "name"    : "CLFL",
        "desc"    : "Clutch Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "IDLE",
        "desc"    : "Idle Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "SEND",
        "desc"    : "SEND Flag?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CLTH",
        "desc"    : "Cloth flag?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "WOT",
        "desc"    : "Wide Open Throttle Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIRT",
        "desc"    : "Dirty Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "IGCR",
        "desc"    : "IGCR?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CRNK",
        "desc"    : "Cranking Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "MUL",
        "desc"    : "MULLALOO Flag?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skips bits",
        "size"    : 8,
        "skip"    : true
      },
      {
        "name"    : "IGON",
        "desc"    : "Ignition ON Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "NOS",
        "desc"    : "Nitrous Oxide Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CTH2",
        "desc"    : "CLOTH Flag Again?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "WOT2",
        "desc"    : "Wide Open Throttle Flag Again",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "AC",
        "desc"    : "Air-Con Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "ELEC",
        "desc"    : "Electricity Flag",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "CLUT",
        "desc"    : "Clutch Flag Again Maybe?",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "IGNF",
        "desc"    : "Ignition Flag",
        "size"    : 1,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skips forwards more bits",
        "skip"    : true,
        "size"    : 13,
      },
      {
        "name"    : "TT",
        "desc"    : "TurboTimer Output",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "AC2",
        "desc"    : "Air-Con Output",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "FP",
        "desc"    : "Fuel Pump Output",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bits",
        "skip"    : true,
        "size"    : 10
      },
      {
        "name"    : "ILOD",
        "desc"    : "Learning Ignition LOAD Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "IRPM",
        "desc"    : "Learning Ignition RPM Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "IWAT",
        "desc"    : "Learning Ignition WAIT Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "FLOD",
        "desc"    : "Learning Fuel LOAD Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "FRPM",
        "desc"    : "Learning Fuel RPM Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "FWAT",
        "desc"    : "Learning Fuel WAIT Status",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bytes, next datapoint is 5 points away from here",
        "skip"    : true,
        "size"    : 16
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bytes, next datapoint is 4 points away from here",
        "skip"    : true,
        "size"    : 16
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bytes, next datapoint is 3 points away from here",
        "skip"    : true,
        "size"    : 16
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bytes, next datapoint is 2 points away from here",
        "skip"    : true,
        "size"    : 16
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip some bytes, next datapoint is 1 points away from here",
        "skip"    : true,
        "size"    : 16
      },
      {
        "name"    : "WGDC",
        "desc"    : "Wastegate Duty Cycle (Actual)",
        "size"    : 16,
        "min"     : 0,
        "max"     : 1,
      }
    ]
  },
  {
    "start" : 4194,
    "count" : 8,
    "data"  : [
      {
        "name"    : "V2DC",
        "desc"    : "VVT2 Duty Cycle",
        "size"    : 8,
        "min"     : 0,
        "max"     : 100,
      },
      {
        "name"    : "V2SP",
        "desc"    : "VVT2 SetPoint (deg BTDC)",
        "size"    : 8,
        "min"     : 0,
        "max"     : 360,
      },
      {
        "name"    : "V1DC",
        "desc"    : "VVT1 Duty Cycle",
        "size"    : 8,
        "min"     : 0,
        "max"     : 100,
      },
      {
        "name"    : "V1SP",
        "desc"    : "VVT1 SetPoint (deg BTDC)",
        "size"    : 8,
        "min"     : 0,
        "max"     : 360,
      },
      {
        "name"    : "EXIN",
        "desc"    : "External input value (-2000 to +2000)",
        "size"    : 16,
        "min"     : -2000,
        "max"     : 2000,
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip bytes to get to DigInRaw",
        "size"    : 16,
        "skip"    : true
      },

      {
        "name"    : "NUL",
        "desc"    : "Skip bytes to get to DigInRaw",
        "size"    : 16,
        "skip"    : true
      },

      {
        "name"    : "NUL",
        "desc"    : "Skip bytes to get to DigInRaw",
        "size"    : 16,
        "skip"    : true
      },
      {
        "name"    : "NUL",
        "desc"    : "Skip bytes to get to DigInRaw",
        "size"    : 8,
        "skip"    : true
      },
      {
        "name"    : "DIG7",
        "desc"    : "Digital Input 7",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG6",
        "desc"    : "Digital Input 6",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG5",
        "desc"    : "Digital Input 5",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG4",
        "desc"    : "Digital Input 4",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG3",
        "desc"    : "Digital Input 3",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG2",
        "desc"    : "Digital Input 2",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      },
      {
        "name"    : "DIG1",
        "desc"    : "Digital Input 1",
        "size"    : 1,
        "min"     : 0,
        "max"     : 1,
      }
    ]
  }      
];

module.exports = datapoints;

/*
datapoints["adaptronic"].forEach(
  function (getter) {
    getter.data.forEach(
      function (thisDp) {
        if (!thisDp.skip) {
          console.log(thisDp.name + ":\t" + thisDp.desc);
        }
      }
    );
  }
);
*/
