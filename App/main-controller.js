myApp.controller("myController", ["$scope", "mainService", "logicService", function ($scope, mainService, logicService) {
    $scope.test = "test";
    $scope.players = [];

    $scope.addPlayerToTable = function () {
        //Function below calls from the service 
        var valid = mainService.seeIfInputIsCorrect($scope.currentPlayer);
        if (valid) {
            $scope.players.push($scope.currentPlayer);
            $scope.currentPlayer = {};
            console.log("this is scope.players", $scope.players);

        }
    };


    $scope.playersInBracketOrder = [];
    $scope.currentPlayer = {
        name: "",
        rank: ""
    }

    $scope.doIt = function () {

        $scope.bracketSize = mainService.determineBracketSize($scope.players.length); //function is passed in the length of the array of players
        console.log("this is the bracket size", $scope.bracketSize);

        //_____________________________________Create Bye Array____________________________________________

        var myByeArray = mainService.createByeArray($scope.bracketSize.length, $scope.players.length);



        console.log("(CONTROLLER)this is the bye Array", myByeArray); //$scope.myByeArray is the array of the byes

        //_______________________________________Create Unseeded Players Array____________________________________________

        $scope.unseededPlayersArray = mainService.placeUnseededPlayersIntoArray($scope.players);

        console.log("this is $scope.unseededPlayersArray", $scope.unseededPlayersArray); //This is the unseeded players array


        //___________________________________________Create PlaceHolder Array_____________________________________________


        for (var i = 1; i <= $scope.bracketSize.length; i++) {

            $scope.playersInBracketOrder.push("player_placeholder");
        }


        //__________________________________________Add Seeded Players into Main Array____________________________________________

        $scope.playersInOrder = mainService.placeSeededPlayersIntoSlots($scope.players, $scope.playersInBracketOrder);
        console.log("this is the placeHolder Array + The Seeded Players", $scope.playersInOrder); //$scope.playersInOrder is the main Array


        //___________________________________________Add Byes to Main Array_____________________________________________

        //        $scope.playersInOrderWithByes = mainService.addByes(myByeArray, $scope.playersInOrder);
        //        console.log("this is playersInOrderWithByes", $scope.playersInOrderWithByes);

        //___________________________________________Add Unseeded Players to Main Array__________________________________________

        $scope.finalBracket = mainService.addUnseededPlayers($scope.unseededPlayersArray, $scope.playersInOrderWithByes);
        console.log("this is final bracket!", $scope.finalBracket);


        //___________________________________________Add Byes to Main Array (2nd Attempt)____________________________________________   

        addByes(myByeArray, $scope.playersInOrder);

        function addByes(arrayOfByes, mainArray) {
            console.log("this is array of Byes", arrayOfByes);
            console.log("this is mainArray", mainArray);

        }

    }



}]);