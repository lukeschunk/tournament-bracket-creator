myApp.service('mainService', function () {

    //    __________________________________________To make sure input is valid_____________________________________________

    this.seeIfInputIsCorrect = function (inputValue) {
        if (inputValue.name === "") { //this breaks out of the function if the name is blank so you don't get a blank item on your list
            alert("please enter a real player or team");
            return false;
        } else if (inputValue.rank < 1) {
            alert("please enter a rank of 1 or higher");
            return false;
        }
        return true;
    };

    //    __________________________________________To make sure input is valid_____________________________________________

    this.determineBracketSize = function (length) {

        var possibleSizes = [2, 4, 8, 16, 32, 64];
        for (var i = 0; i < possibleSizes.length; i++) {
            if (length <= possibleSizes[i]) {
                var bracketSize = possibleSizes[i];
                console.log("this is bracketSize from service", bracketSize);
                return bracketSize;

            }
        }

    };

})