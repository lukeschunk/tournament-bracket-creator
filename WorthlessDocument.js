    var seedPlacement = {

        4: {
            1: 0,
            2: 3,
            3: 1,
            4: 2
        },

        8: {
            1: 0,
            2: 7,
            3: 3,
            4: 4,
            5: 2,
            6: 5,
            7: 1,
            8: 6
        },

        16: { //Size Of Bracket
            1: 0, //Rank and position where Rank shoul dbe 
            2: 15,
            3: 8,
            4: 7,
            5: 6,
            6: 12,
            7: 11,
            8: 4,
            9: 5,
            10: 10,
            11: 2,
            12: 13,
            13: 6,
            14: 9,
            15: 1,
            16: 14
        }
    };

    var myParticipants = [
        {
            name: "luke",
            rank: 1
                    },
        {
            name: "luis",
            rank: 2
                    },
        {
            name: "gabe",
            rank: 3
                    },
        {
            name: "test",
            rank: 4
                    }
        ];

    //_________________________________Determine Bracket Size & Create PlaceHolder Array_______________________________________


    function determineBracketSize(numberOfPlayers) {
        var placeHolderArray = [];
        var possibleSizes = [2, 4, 8, 16, 32, 64];
        for (var i = 0; i < possibleSizes.length; i++) {
            if (numberOfPlayers <= possibleSizes[i]) {
                var bracketSize = possibleSizes[i];
                break;
            }
        }

        for (var i = 0; i < bracketSize; i++) {
            placeHolderArray.push("Placeholder_participant");
        }
        return placeHolderArray;

    };

    //_________________________________CREATING BRACKET OBJECT _______________________________________

    function createBracket(numberOfPlayers) {
        var slots = determineBracketSize(numberOfPlayers),
            size = slots.length,
            numberOfByes = size - numberOfPlayers,
            rounds = getRounds(size);
        return {
            participants: numberOfPlayers,
            byes: numberOfByes,
            size: size,
            slots: slots,
            rounds: rounds
        }
    }



    function getRounds(bracketSize) {
        return Math.log(bracketSize) / Math.log(2);
    }

    //_____________________________TEST OUT PROPERTIES _______________________________________
    //    for (var i = 2; i <= 64; i *= 2) {
    //        console.log(createBracket(i));
    //    }

    //_________________________________PLACE SEEDED PLAYERS INTO ARRAY _______________________________________

    function placeSeededPlayers(participants, slots, seedPlacement) {
        //        console.log("this is participants", participants);
        console.log("this is slots", slots);
        //        console.log("this is seedplacement[16][3]", seedPlacement['16']['3']);

        participants.forEach(function (participant) {
            slots[seedPlacement[slots.length][participant.rank]] = participant;
        });
        return slots;
    }



    var updatedSlots = placeSeededPlayers(myParticipants, createBracket(myParticipants.length).slots, seedPlacement); //REPLACE 11 with actual numberOf Players (myParticipants.length-1?)
    console.log("this is updatedSlots", updatedSlots);


    //_________________________________PLACE BYES INTO ARRAY (SEEDS) _______________________________________
    var myParticipants = [
        {
            name: "luke",
            rank: 1
                    },
        {
            name: "luis",
            rank: 2
        },
        {
            name: "gabe",
            rank: 3
        },
        {
            name: "test",
            rank: 4
        },
        {
            name: "spencer",
            rank: ""
        },
        {
            name: "stella",
            rank: ""
        },
        {
            name: "paul",
            rank: ""
        }
        ];

    var testy = [
        {
            name: "luke",
            rank: 1
        },
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
        {
            name: "test",
            rank: 4
        },
        {
            name: "gabe",
            rank: 3
        },
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",

        {
            name: "luis",
            rank: 2
        },
"Placeholder_participant"
    ];

    function placeByes(byes, seededPlayersInOrder, participants) {
        console.log("this is byes", byes);
        console.log("this is seededPlyaersInOrder", seededPlayersInOrder);
        console.log("this is participants", participants);


        for (var i = 0; i < participants.length; i++) {
            for (var j = 0; j < seededPlayersInOrder.length; j++) {
                if (seededPlayersInOrder[j].name && seededPlayersInOrder[j].name === participants[i].name && byes > 0) {
                    console.log("testing");
                    seededPlayersInOrder[j + 1] = {
                        name: "bye",
                        rank: ""
                    }
                    byes--;
                }
            }

        }
        return seededPlayersInOrder;

    }

    var test = placeByes(3, testy, myParticipants);

    console.log(test);

    //_________________________________PLACE UNSEEDED PLAYERS INTO ARRAY_______________________________________
    var myParticipants = [
        {
            name: "luke",
            rank: 1
                    },
        {
            name: "luis",
            rank: 2
        },
        {
            name: "gabe",
            rank: 3
        },
        {
            name: "test",
            rank: 4
        },
        {
            name: "spencer",
            rank: ""
        },
        {
            name: "stella",
            rank: ""
        },
        {
            name: "paul",
            rank: ""
        }
        ];

    var testy = [
        {
            name: "luke",
            rank: 1
        },
        {
            name: "bye",
            rank: ""
        },
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
        {
            name: "test",
            rank: 4
        },
        {
            name: "gabe",
            rank: 3
        },
        {
            name: "bye",
            rank: ""
        },
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
"Placeholder_participant",
        {
            name: "luis",
            rank: 2
        },
        {
            name: "bye",
            rank: ""
        }
    ];

    function placeUnseeded(participants, seededPlayersInOrder) {
        var unseededPlayersArr = [];
        for (var i = 0; i < participants.length; i++) {
            if (!participants[i].rank) {
                unseededPlayersArr.push(participants[i]);
            }
        }
        for (var i = 0; i < seededPlayersInOrder.length; i++) {
            if (seededPlayersInOrder[i] === "Placeholder_participant") {
                seededPlayersInOrder[i] = unseededPlayersArr[0];
                unseededPlayersArr.shift();
            }
        }
        return seededPlayersInOrder;
    }

    var testagain = placeUnseeded(myParticipants, testy);
    console.log(testagain);





========================================================================================================================================
========================================================================================================================================
=====================================================This is a Big Comment  ============================================================
========================================================================================================================================
========================================================================================================================================
    
    
    //myApp.service('createRounds', function () {
//    var matches = [];
//    this.createMatches = function (finalBracketSlots) {
//        for (var i = 0; i < finalBracketSlots.length; i += 2) {
//            matches.push({
//                player1: finalBracketSlots[i].name,
//                player2: finalBracketSlots[i + 1].name
//
//            })
//        }
//        return matches;
//    };
//    
//    var finalBracketSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//    var determineRounds = function(finalBracketSlots) {
//        var size = finalBracketSlots.length;
//        var numberOfRounds = Math.log2(size);
//        var allRoundsArray = [];
//        for(var i = 1; i < numberOfRounds; i++) {
//            allRoundsArray.push(["test"]);
//        }
//        return allRoundsArray;
//    }
//
//    console.log(determineRounds(finalBracketSlots));
//})