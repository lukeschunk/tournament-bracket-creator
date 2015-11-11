myApp.service('mainService', function () {

    //    __________________________________________To make sure input is valid_____________________________________________

//    this.seeIfInputIsCorrect = function (inputValue) {
//        if (inputValue.name === "") { //this breaks out of the function if the name is blank so you don't get a blank item on your list
//            alert("please enter a real player or team");
//            return false;
//        } else if (inputValue.rank < 1) {
//            alert("please enter a rank of 1 or higher");
//            return false;
//        }
//        return true;
//    };
    
    
    //player will have a name and rank property
    this.advanceWinner = function(player, currentRound, nextRoundArray) {
        var index = currentRound.indexOf(player);
        if(index === 1 || index === 0) {
            nextRoundArray[0] = player;
            console.log("this is nextRoundArray", nextRoundArray);
        } else if(index === 2 || index === 3) {
            nextRoundArray[1] = player;
            
        } else if(index === 4 || index === 5) {
            nextRoundArray[2] = player;
            
        } else if(index === 6 || index === 7) {
            nextRoundArray[3] = player;
            
        } else if(index === 8 || index === 9) {
            nextRoundArray[4] = player;
            
        } else if(index === 10 || index === 11) {
            nextRoundArray[5] = player;
            
        } else if(index === 12 || index === 13) {
            nextRoundArray[6] = player;
            
        } else if(index === 14 || index === 15) {
            nextRoundArray[7] = player;
        }
    };
    
    
    

});