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
            15: 14,
            16: 1
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



    var updatedSlots = placeSeededPlayers(myParticipants, createBracket(11).slots, seedPlacement);
    console.log("this is updatedSlots", updatedSlots);



    var seedPlacementByRank