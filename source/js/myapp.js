var app = angular.module("myToDoApp",[]);
app.controller('myAppCntr', function($scope){
    $scope.tasks = ['Call back customer', 'Make a list of docs', 'Print letter copies', 'Make payment'];
    $scope.addTask= function () { 
        $scope.errortext = "";
        if ($scope.tasks.indexOf($scope.addThisTask) == -1) {
            $scope.tasks.push($scope.addThisTask);
        }else{
            $scope.errortext = "The item is already in your list";
        }
    }
    $scope.removeThisTask = function (x) {
        $scope.errortext = "";
        $scope.tasks.splice(x,1);
    }
});
