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
