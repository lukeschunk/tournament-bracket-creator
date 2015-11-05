myApp.controller("myController", ["$scope", "mainService", function ($scope, mainService) {
    $scope.test = "test";
    $scope.players = [];

    $scope.addPlayerToTable = function () {
        //Function below calls from the service 
        var valid = mainService.seeIfInputIsCorrect($scope.currentPlayer);
if(valid) {
        $scope.players.push($scope.currentPlayer);
        $scope.currentPlayer = {};

    }
    };


    //    $scope.myFunc = function (player) {
    //        $scope.players.push(player);
    //        $scope.currentPlayer = {};
    //    };

    $scope.currentPlayer = {
        name: "",
        rank: ""
    }
    
    $scope.doIt = function() { 
        $scope.playersForBracket = $scope.players; //this line is just to potentially populate the brackets on the 'make bracket' click instead of before
        
        $scope.bracketSize = mainService.determineBracketSize($scope.players.length);
        
        $scope.bracketSizeArr = [];
        for(var i = 1; i <= $scope.bracketSize; i++) {
            $scope.bracketSizeArr.push(i);
        }
        console.log("this is $scope.bracketSizeArr", $scope.bracketSizeArr);
    
    }
}]);

