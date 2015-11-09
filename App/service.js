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

    //    __________________________________________Generating the BracketSize Array (array of #of slots) _____________________________________________
    var bracketLengthArray = [];
    this.determineBracketSize = function (length) {
        
        var possibleSizes = [2, 4, 8, 16, 32, 64];
        for (var i = 0; i < possibleSizes.length; i++) {
            if (length <= possibleSizes[i]) {
                var bracketSize = possibleSizes[i];
                break;
            }
        }
  
        for (var i = 0; i < bracketSize; i++) {
            bracketLengthArray.push(i);
        }
        return bracketLengthArray;

    };

    //__________________________________Creating Array of Byes____________________________________________
    this.createByeArray = function (lengthOfBracket, numberOfPlayers) {
        debugger;
//        console.log("this is lengthOfBracket", lengthOfBracket);
//        console.log("this is numberOfPlayers", numberOfPlayers);
        var numberOfByes = lengthOfBracket - numberOfPlayers;
        var byeArray = [];

        for (var i = 0; i < numberOfByes; i++) {
            
            byeArray.push({
                name: "bye",
                rank: ""
            });
            console.log("(SERVICE)this is byeArray", byeArray);
        }
//        console.log("this is the first bye array", byeArray);
        return byeArray;
    }


    //    _________________________________________CREATE ARRAY OF UNSEEDED PLAYERS____________________________________________


    this.placeUnseededPlayersIntoArray = function (playersArray) {
        var unseededArray = [];
        for (var i = 0; i < playersArray.length; i++) {
            if (!playersArray[i].rank) {
                unseededArray.push(playersArray[i]);
            }
        }
        return unseededArray;
    }


    //    ========================================================================================================================================
    //    ========================================================================================================================================
    //    ===================================================PUT SEEDED PLAYERS INTO ARRAY=======================================================
    //    ========================================================================================================================================
    //    ========================================================================================================================================

    this.placeSeededPlayersIntoSlots = function (playersArray, playersInBracketOrder) {

        console.log("this is most recent bracket length array", bracketLengthArray);

        //______________________________________ DETERMINING SLOTS FOR DIFFERENT SEEDS  _____________________________________________




        var seed1Slot = bracketLengthArray[0]; //1
        var seed2Slot = bracketLengthArray[bracketLengthArray.length - 1]; //8
        var seed3Slot = (bracketLengthArray.length / 2); //5
        var seed4Slot = (bracketLengthArray.length / 2) - 1; //4
        var seed5Slot = Math.round(bracketLengthArray.length / 2.667); //3
        var seed6Slot = Math.round(bracketLengthArray.length / 1.334);
        var seed7Slot = Math.round(bracketLengthArray.length / 1.143);
        var seed8Slot = bracketLengthArray.length / 4;
        var seed9Slot = Math.round(bracketLengthArray.length / 5.333);
        var seed10Slot = Math.round(bracketLengthArray.length / 1.231);
        var seed11Slot = Math.round(bracketLengthArray.length / 1.454);
        var seed12Slot = Math.round(bracketLengthArray.length / 3.2);
        var seed13Slot = Math.round(bracketLengthArray.length / (16 / 7));
        var seed14Slot = Math.round(bracketLengthArray.length / (16 / 10));
        var seed15Slot = Math.round(bracketLengthArray.length / (16 / 15));
        var seed16Slot = Math.round(bracketLengthArray.length / 8);

        //LOGGING SEEDS TO TEST
        console.log('seed1Slot', seed1Slot);
        console.log('seed2Slot', seed2Slot);
        console.log('seed3Slot', seed3Slot);
        console.log('seed4Slot', seed4Slot);
        console.log('seed 5 slot', seed5Slot);
        console.log('seed 6 slot', seed6Slot);

        console.log("this is playersInBracketOrder", playersInBracketOrder);
        console.log("this is playersArray", playersArray);

        //_____________________________________________PLACING PLAYERS ___________________________________________

        for (var i = 0; i < playersArray.length; i++) {
            
            if (playersArray[i].rank === 1) {
                playersInBracketOrder.splice((seed1Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 2) {
                playersInBracketOrder.splice((seed2Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 3) {
                playersInBracketOrder.splice((seed3Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 4) {
                playersInBracketOrder.splice((seed4Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 5) {
                playersInBracketOrder.splice((seed5Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 6) {
                playersInBracketOrder.splice((seed6Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 7) {
                playersInBracketOrder.splice((seed7Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 8) {
                playersInBracketOrder.splice((seed8Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 9) {
                playersInBracketOrder.splice((seed9Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 10) {
                playersInBracketOrder.splice((seed10Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 11) {
                playersInBracketOrder.splice((seed11Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 12) {
                playersInBracketOrder.splice((seed12Slot), 1, playersArray[i]);

            } else if (playersArray[i].rank === 13) {
                playersInBracketOrder.splice(seed13Slot, 1, playersArray[i]);

            } else if (playersArray[i].rank === 14) {
                playersInBracketOrder.splice(seed14Slot, 1, playersArray[i]);

            } else if (playersArray[i].rank === 15) {
                playersInBracketOrder.splice(seed15Slot, 1, playersArray[i]);

            } else if (playersArray[i].rank === 16) {
                playersInBracketOrder.splice(seed16Slot, 1, playersArray[i]);

            }
        }
        return playersInBracketOrder;
    };

//___________________________________________Adding Byes___________________________________________    
    

    this.addUnseededPlayers = function(unseededPlayers, playersInBracketOrder) {
        for (var i = 0; i < playersInBracketOrder.length; i++) {
            if (playersInBracketOrder[i] === "player_placeholder") {
                playersInBracketOrder.splice(i, 1, unseededPlayers[0]);
                unseededPlayers.shift();
            }
        }
    };
    
});