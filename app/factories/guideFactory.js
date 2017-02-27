"use strict";

app.factory("GuideFactory", function ($http, $q){

let getGuides = function(){
	console.log("inside getGuides");
	return $q ((resolve, reject) => {
		$http.get("data/guides.json")
	.then( (data) =>{
		resolve(data);
	})
	.catch( (error) =>{
		reject(error);
	});
});
};

return {getGuides};

});