myApp.service('mainService', function () {

    this.seeIfInputIsCorrect = function(inputValue){
        if(inputValue.name === "") {//this breaks out of the function if the name is blank so you don't get a blank item on your list
            alert("please enter a real player or team");
            return;
        } else if (inputValue.rank < 1) {
            alert("please enter a rank of 1 or higher");
            return;
        }
    }
})