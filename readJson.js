// Loading file system(fs) module
var fs = require("fs");
// Reading json file asynchronously
fs.readFile("./input-data.json", function(err, data){
	if(err){ // If error occurred while reading file
		console.log("Error occured while reading json file");
	} else {
		var jsonObj = JSON.parse(data);
		console.log(jsonObj);
		console.log()	// new line
		console.log(typeof jsonObj);
		// Iterating over keys to print the values referred by them
		for(let key in jsonObj){
			console.log(key, jsonObj[key]);
		}
	}
})
