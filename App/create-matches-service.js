myApp.service('createRounds', function () {
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
    
    var finalBracketSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    var determineRounds = function(finalBracketSlots) {
        var size = finalBracketSlots.length;
        var numberOfRounds = Math.log2(size);
        var allRoundsArray = [];
        for(var i = 1; i < numberOfRounds; i++) {
            allRoundsArray.push(["test"]);
        }
        return allRoundsArray;
    }

    console.log(determineRounds(finalBracketSlots));
})