var nF = require ('./index.js');

// if you have installed module with npm 
// You should:
// var nF = require('tone-frequency');
nF.numSteps = 12;
nF.base = 440;

console.log("Base tone = " +nF.base );
console.log('Steps = ' + nF.numSteps);
console.log('A = ' + nF.getToneStep(0));
console.log('D = ' + nF.getToneStep(5));
console.log('A (an octave lower) = ' + nF.getToneStep(-12));
console.log('A an octave higher = ' + nF.getToneStep(12));

