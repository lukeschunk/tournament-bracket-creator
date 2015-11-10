myApp.service('createRounds', function () {

    
//________________________________________CREATE MATCHES _____________________________________________    
    
    
    var matches = [];
    this.createMatches = function (finalBracketSlots) {
        for (var i = 0; i < finalBracketSlots.length; i += 2) {
            matches.push({
                player1: finalBracketSlots[i].name,
                player2: finalBracketSlots[i + 1].name

            })
        }
        return matches;
    };



//________________________________________DETERMINE NUMBER OF ROUNDS_____________________________________________      
    
    
    var determineRounds = function (finalBracketSlots) {
        var size = finalBracketSlots.length;
        var numberOfRounds = Math.log2(size);
        var numberOfRoundsLeft = numberOfRounds - 1;

        var round2Array = [];
        var round2ArraySize = finalBracketSlots.length / 2;

    }

    
//_________________________________CREATE ARRAY OF ROUNDS_____________________________________________      
        
    this.createArrayOfRoundLenghts = function(firstRoundLength) {
        var arrayOfRoundLengths = [];
        var currentRoundLength = firstRoundLength;
        for (var i = 0; i < firstRoundLength; i++) {
            if (currentRoundLength >= 2) {
                arrayOfRoundLengths.push(currentRoundLength);
                currentRoundLength = currentRoundLength / 2;
            }
        }
        


        var arrayOfRounds = [];

        for (var j = 0; j < arrayOfRoundLengths.length; j++) {

            var currentRound = [];
            for (var k = 0; k < arrayOfRoundLengths[j]; k++) {
                currentRound.push("test");
            }
            arrayOfRounds.push(currentRound);

        }

        
        var objectOfRounds = {};
        for(var i = 0; i < arrayOfRounds.length; i++) {
            objectOfRounds['round' + i] = arrayOfRounds[i];
        }
        return objectOfRounds;
    }

//
//    for (var i = 0; i < array.length; i++) {
//        object['bracket' + i] = 
//    }
//        
//    ng-repeat=(key, val) in object    


})