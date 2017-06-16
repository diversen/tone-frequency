var nF = require ('./index.js');
// if you have installed module with npm 
// You should:
// var nF = require('note-frequency');
console.log("Base tone = " +nF.base );
console.log('Steps = ' + nF.numSteps);
console.log('C from base = ' + nF.getToneStep(3));
