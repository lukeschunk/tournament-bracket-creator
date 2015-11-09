var bracketLengthArray = [1, 2, 3, 4, 5, 6, 7, 8];

//_____________________________________________ DETERMINING SLOTS FOR DIFFERENT SEEDS  _____________________________________________
var seed1Slot = bracketLengthArray[0];
var seed2Slot = bracketLengthArray[bracketLengthArray.length - 1];
var seed3Slot = (bracketLengthArray.length / 2) + 1;
var seed4Slot = (bracketLengthArray.length / 2);
var seed5Slot = Math.round(bracketLengthArray.length / 2.667);
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

console.log(bracketLengthArray.length);
console.log(seed1Slot);

//_____________________________________________PLACING PLAYERS ___________________________________________



function placeSeededPlayersIntoSlots(playersArray, playersInBracketOrder) {
    var i;
    for (i = 0; i < playersArray.length; i++) {
        if (playersArray[i].rank === 1) {
            playersInBracketOrder.splice((seed1Slot - 1), 1, playersArray[i]);
            console.log("test");
        }
        if (playersArray[i].rank === 2) {
            playersInBracketOrder.splice(seed2Slot - 1);

        }
        if (playersArray[i].rank === 3) {
            playersInBracketOrder.splice(seed3Slot - 1);

        }
        if (playersArray[i].rank === 4) {
            playersInBracketOrder.splice(seed4Slot - 1);

        }
        if (playersArray[i].rank === 5) {
            playersInBracketOrder.splice(seed5Slot - 1);

        }
        if (playersArray[i].rank === 6) {
            playersInBracketOrder.splice(seed6Slot - 1);

        }
        if (playersArray[i].rank === 7) {
            playersInBracketOrder.splice(seed7Slot - 1);

        }
        if (playersArray[i].rank === 8) {
            playersInBracketOrder.splice(seed8Slot - 1);

        }
        if (playersArray[i].rank === 9) {
            playersInBracketOrder.splice(seed9Slot - 1);

        }
        if (playersArray[i].rank === 10) {
            playersInBracketOrder.splice(seed10Slot - 1);

        }
        if (playersArray[i].rank === 11) {
            playersInBracketOrder.splice(seed11Slot - 1);

        }
        if (playersArray[i].rank === 12) {
            playersInBracketOrder.splice(seed12Slot - 1);

        }
        if (playersArray[i].rank === 13) {
            playersInBracketOrder.splice(seed13Slot - 1);

        }
        if (playersArray[i].rank === 14) {
            playersInBracketOrder.splice(seed14Slot - 1);

        }
        if (playersArray[i].rank === 15) {
            playersInBracketOrder.splice(seed15Slot - 1);

        }
        if (playersArray[i].rank === 16) {
            playersInBracketOrder.splice(seed16Slot - 1);

        } else {
            console.log("something else");
        }
    } return playersInBracketOrder;
}