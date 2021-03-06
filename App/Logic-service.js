myApp.service('logicService', function () {

    this.makeBracket = function (myParticipants) {
        
        console.log("it's working");


        console.log("myparticipants.length", myParticipants.length);


        var seedPlacement = {

            4: {
                1: 0,
                2: 3,
                3: 1,
                4: 2
            },

            8: {
                1: 0,
                2: 6,
                3: 3,
                4: 2,
                5: 4,
                6: 5,
                7: 7,
                8: 1
            },

            16: { //Size Of Bracketds d
                1: 0, //Rank and position where Rank shoul dbe 
                2: 15,
                3: 8,
                4: 7,
                5: 5,
                6: 11,
                7: 12,
                8: 3,
                9: 2,
                10: 13,
                11: 10,
                12: 4,
                13: 6,
                14: 9,
                15: 14,
                16: 1
            }
        };


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
            console.log("this is size", size);
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



        var slotsWithSeededPlayers = placeSeededPlayers(myParticipants, createBracket(myParticipants.length).slots, seedPlacement); //REPLACE 11 with actual numberOf Players (myParticipants.length-1?)
        console.log("this is slotsWithSeededPlayers", slotsWithSeededPlayers);


        //_________________________________PLACE BYES INTO ARRAY (SEEDS) _______________________________________


        function placeByes(byes, seededPlayersInOrder, participants) {
            console.log("this is byes", byes);
            console.log("this is seededPlyaersInOrder", seededPlayersInOrder);
            console.log("this is participants", participants);

            
            for (var i = 0; i < participants.length; i++) {
                for (var j = 0; j < seededPlayersInOrder.length; j++) {
                    if (seededPlayersInOrder[j].name && seededPlayersInOrder[j].name === participants[i].name && byes > 0 && seededPlayersInOrder[j + 1] === "Placeholder_participant") {
                        console.log("testing");
                        seededPlayersInOrder[j + 1] = {
                            name: "bye",
                            rank: ""
                        }
                        byes--;

                    } else if (seededPlayersInOrder[j].name && seededPlayersInOrder[j].name === participants[i].name && byes > 0 && seededPlayersInOrder[j - 1] === "Placeholder_participant") {
                        console.log("testing 2");
                        seededPlayersInOrder[j - 1] = {
                            name: "bye",
                            rank: ""
                        }
                        byes--;
                    } //else if there's still byes left over, just put them at the next placeholder_participant

                }


            }
            return seededPlayersInOrder;
        }

        var slotsWithSeededPlayersAndByes = placeByes(createBracket(myParticipants.length).byes, slotsWithSeededPlayers, myParticipants);

        console.log("this is SlotsWithSeededPlayersAndByes", slotsWithSeededPlayersAndByes);

        //_________________________________PLACE UNSEEDED PLAYERS INTO ARRAY_______________________________________


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

        var completedSlots = placeUnseeded(myParticipants, slotsWithSeededPlayersAndByes);
        console.log("this is the completedSlots!", completedSlots);
        
        return completedSlots;
    }
})