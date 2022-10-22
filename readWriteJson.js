// Loading file system(fs) module
var fs = require("fs");
// Reading json file asynchronously
fs.readFile("./input-data.json", function(err, data){
    if(err){ // If error occurred while reading file
	console.log("Error occured while reading json file");
    } else {
	var jsonObj = JSON.parse(data);
	// Iterating over keys to print the values referred by them
	
    	var data = {}
    	for(let i = 0;i<jsonObj.length;i++){
      	let balance = 0
      	let isValid = false
      	for(let j = 0;j<jsonObj[i].transformations[j].length;j++){
            balance+=jsonObj[i].transformations[j].qty*jsonObj[i].transformations[j].size
      	}
      	if(balance==0){
            isValid=true
      	}
      	var obj = {
            jsonObj[i],
            "balance": balance,
            "isValid": isValid,
            "errorReason": null
      	}
      	data.push(obj)
    	let jsonOkObj = [JSON.parse(data)] // without brackets it reverts an error
    	jsonOkObj.push(data)
    	let outputData = JSON.stringify(jsonOkObj, null, 2);
    	fs.writeFile('./output-data.json', outputData, (err) => {
      	    if (err) throw err;
      	    console.log('Data written to file');
    	});
    	console.log('This is after the write call');
    }
})
