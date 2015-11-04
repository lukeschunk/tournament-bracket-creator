myApp.controller("myController", ["$scope", "mainService", function ($scope, mainService) {
    $scope.test = "test";
    $scope.players = [];

    $scope.addPlayerToTable = function () {  
        //Function below calls from the service 
        mainService.seeIfInputIsCorrect($scope.currentPlayer);
        
        $scope.players.push($scope.currentPlayer);
        $scope.currentPlayer = {};
        console.log($scope.players);
    };


//    $scope.myFunc = function (player) {
//        $scope.players.push(player);
//        $scope.currentPlayer = {};
//    };
    
    $scope.currentPlayer = {
        name: "",
        rank: ""
    }

}]);