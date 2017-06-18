var nF = require ('./index.js');

// if you have installed module with npm you should:
// var nF = require('tone-frequency');
nF.numSteps = 12;
nF.base = 440;

console.log("Base tone = " +nF.base ); // => 440
console.log('Steps = ' + nF.numSteps); // => 12
console.log('A = ' + nF.getToneStep(0)); // 440
console.log('D = ' + nF.getToneStep(5)); // 587.3295358348151
console.log('A (an octave lower) = ' + nF.getToneStep(-12)); // => 220
console.log('A an octave higher = ' + nF.getToneStep(12)); // => 880

