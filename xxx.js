    this.addByes = function (byeArray, playersInBracketOrder) {
        console.log("this is byeArray(recent)", byeArray);
        console.log("this is byeArray.name", byeArray[0].name);
        
        console.log("this is the length of bye array", byeArray.length);
        console.log("this is mainArray(recent)", playersInBracketOrder);
        for (var i = 0; i < playersInBracketOrder.length; i++) {
            console.log(i);
            if (playersInBracketOrder[i].rank === 1 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i + 1, 1, byeArray[0]);
                byeArray.pop();

            } else if (playersInBracketOrder[i].rank === 2 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i - 1, 1, byeArray[0]);
                byeArray.pop();
                
            } else if (playersInBracketOrder[i].rank === 3 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i + 1, 1, byeArray[0]);
                byeArray.pop();  
                
            } else if (playersInBracketOrder[i].rank === 4 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i - 1, 1, byeArray[0]);
                byeArray.pop();  
                
            } else if (playersInBracketOrder[i].rank === 5 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i + 1, 1, byeArray[0]);
                byeArray.pop();  
                
            } else if (playersInBracketOrder[i].rank === 6 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i - 1, 1, byeArray[0]);
                byeArray.pop();  
                
            } else if (playersInBracketOrder[i].rank === 7 && byeArray[0].name !== undefined) {
                playersInBracketOrder.splice(i + 1, 1, byeArray[0]);
                byeArray.pop();  
                
            }   
        }
        return playersInBracketOrder;
    };
