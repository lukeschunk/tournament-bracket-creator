myApp.service('persistService', function () {

    var inputs = {};
    
    this.addInputs = function (input1, input2, input3) {


        inputs.input1 = input1;
        inputs.input2 = input2;
        inputs.input3 = input3;

        return inputs;
    };

    this.getInputs = function() {
        return inputs;
    };
})