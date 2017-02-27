"use strict";

app.controller("BookCtrl", function($scope, GuideFactory){




let printGuides = function(){
	console.log("inside printGuides");
	GuideFactory.getGuides()
	.then( (guides) =>{
		console.log("guides: ", guides);
		$scope.guides = guides.data.guides;
		console.log("$scope.guides", $scope.guides);
	});
};
printGuides();

let newGuide = {
	title: "Montgomery",
	type: "Where I want to be right now"
};

});