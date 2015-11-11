myApp.controller("myController", ["$scope", "mainService", "logicService", "createRounds", "bracketObjectGenerator", "$state", "persistService", MyController]);



function MyController($scope, mainService, logicService, createRounds, bracketObjectGenerator, $state, persistService) {

    $scope.clickToDelete = false;
    $scope.inputsObj = persistService.getInputs();

    $scope.test = "test";
    $scope.players = [
        {
            name: "luke",
            rank: "1"
            },
        {
            name: "jack",
            rank: "2"
            },
        {
            name: "mom",
            rank: "3"
            },
        {
            name: "dad",
            rank: "4"
            },
        {
            name: "alex",
            rank: "5"
            },
        {
            name: "dude",
            rank: ""
            },
        {
            name: "ulgar",
            rank: ""
            },
        {
            name: "stephen",
            rank: ""
            },
        {
            name: "marcus",
            rank: ""
            },
        {
            name: "paige",
            rank: ""
            },
        {
            name: "a final person",
            rank: ""
            },


        ];



    //_____________________________________ADDING PLAYERS____________________________________________


    $scope.addPlayerToTable = function () {
        console.log("this is current player", $scope.currentPlayer);
        //Function below calls from the service 
        //        var valid = mainService.seeIfInputIsCorrect($scope.currentPlayer);
        var valid = true;
        if (valid) {
            $scope.players.push($scope.currentPlayer);
            $scope.currentPlayer = {};
        }
    };




    //_____________________________________ON BUTTON CLICK_____________________________________________
    $scope.makeMeTrue16 = false;
    $scope.makeMeTrue8 = false;
    $scope.bracket = true;

    $scope.doIt = function () {

        $scope.playersInFinalBracket = logicService.makeBracket($scope.players);

        console.log($scope.playersInFinalBracket);
        var matches = createRounds.createMatches($scope.playersInFinalBracket);
        console.log("this is $scope.playersInFinalBracket", $scope.playersInFinalBracket);



        //____________________________________GENERATE ROUND ARRAYS (FROM ROUND SERvICE_____________________________________________

        $scope.objectOfRounds = createRounds.createArrayOfRoundLenghts($scope.playersInFinalBracket.length);
        console.log("this is object of rounds on the controller", $scope.objectOfRounds);

        //____________________________________SHOW BRACKET BASED ON SIZE OF FIRST ROUND____________________________________________


        show($scope.playersInFinalBracket);

        function show(playersInFinalBracket) {
            //console.log($scope.makeMeTrue16);
            //console.log($scope.makeMeTrue8);
            if ($scope.playersInFinalBracket.length === 16) {
                $scope.makeMeTrue16 = true;
            }
            if ($scope.playersInFinalBracket.length === 8) {
                $scope.makeMeTrue8 = true;
            }
        }


        $scope.bracket = false;


        //        $state.go('bracket');

    }

    $scope.flip = function () {
        $scope.bracket = true;
        $scope.makeMeTrue16 = false;
        $scope.makeMeTrue8 = false;

    }

    $scope.rounds2 = ["", "", "", "", "", "", "", ""];
    $scope.rounds3 = ["", "", "", ""];
    $scope.rounds4 = ["", ""];
    //console.log('scope:', $scope);


    //    ________________________________________LET'S GO_______________________________________

    $scope.letsGo = function () {
        persistService.addInputs($scope.input, $scope.input2, $scope.input3);



        console.log("this is $scope.inputsObj", $scope.inputsObj);

        return $scope.inputsObj

    };

    //    ____________________________________DELETE UNWANTED PLAYER______________________________________

    $scope.deletePlayer = function (player) {
        var index = $scope.players.indexOf(player);
        $scope.players.splice(index, 1);

    };

    //    ___________________________________Show "CLICK TO DELETE______________________________________
    $scope.show = function () {
        $scope.clickToDelete = true;
    }

    //    ___________________________________ADVANCE WINNER___________________________________

    $scope.advanceWinner = function (player) {
        mainService.advanceWinner(player, $scope.playersInFinalBracket, $scope.rounds2);
        console.log("this is $scope.rounds2", $scope.rounds2);
    };

    $scope.advanceWinner2 = function(player) {
        mainService.advanceWinner(player, $scope.rounds2, $scope.rounds3);

    };
    
        $scope.advanceWinner3 = function(player) {
        mainService.advanceWinner(player, $scope.rounds3, $scope.rounds4);

    };


}