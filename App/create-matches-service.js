myApp.service('createMatches', function () {
    var matches = [];
    this.createMatches = function (finalBracketSlots) {
        for(var i = 0; i < finalBracketSlots.length; i += 2) {
            matches.push({
                player1: finalBracketSlots[i].name,
                player2: finalBracketSlots[i + 1].name
                
            })
        }
        return matches;
    }

})