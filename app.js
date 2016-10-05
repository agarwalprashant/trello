(function(){

	var app = angular.module("app",[]);

	app.controller("MainController",MainController);

	function MainController($scope){
		$scope.message = "trello";
		$scope.showDropList  = false;


	$scope.showDropDownList = function(){
		console.log("boards button clicked");
		var array = [];
		for(var i = 0;i<10;i++){
			array.push(i);
		}
			// console.log(array);


		$scope.dropListItems = array;
		// console.log($scope.dropListItems);
		$scope.showDropList = !$scope.showDropList;
	}



		}


	// app.directive("firstDirective",function(){
	// 	return {
	// 		restrict:"E",
	// 		scope:false,
	// 		templateUrl:"headerBar.html"
	// 	}
	// })

}());