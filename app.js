(function(){

	var app = angular.module("app",[]);

	app.controller("MainController",MainController);

	function MainController($scope){
		$scope.message = "trello";
	
		}


	app.directive("firstDirective",function(){
		return {
			restrict:"E",
			scope:false,
			templateUrl:"headerBar.html"
		}
	})

}());