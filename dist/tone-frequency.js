/* Package: tone-frequency. Version: 1.0.4. License: MIT. Author: dennis iversen. Homepage: https://github.com/diversen/tone-frequency#readme   */ (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toneFrequency = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// See e.g. http://www.phy.mtu.edu/~suits/NoteFreqCalcs.html
function noteFrequency() {
    
    this.base = 440; // A
    this.numSteps = 12; // 12
    
    this.getStepSize = function () {
        return Math.pow(2, 1/this.numSteps);
    };
    
    // Return hz of the step, e.g. for the default settings tihs yields:
    // 0 = 440 (A)
    // 5 = 587.329... (D)
    // -12 = 220 
    this.getToneStep =function(step) {
        return Math.pow(this.getStepSize(), step) * this.base;
    };  
}

module.exports = new noteFrequency();

},{}]},{},[1])(1)
});