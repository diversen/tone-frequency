// See e.g. http://www.phy.mtu.edu/~suits/NoteFreqCalcs.html
function noteFrequency() {
    
    this.base = 440; // A
    this.numSteps = 12; // 12
    
    this.getStepSize = function () {
        return Math.pow(2, 1/this.numSteps);
    };
    
    // Get steps from base tone
    // A positive or negative int
    // A is base. To get see, use 3 = A B 'C'. To go down use e.g. -12
    this.getToneStep =function(step) {
        return Math.pow(this.getStepSize(), step) * this.base;
    };  
}

module.exports = new noteFrequency();
