
var express = require('express')
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.post('/json', function(request, response){
    console.log(request.body);      // JSON
    var jsonRequest = request.body;
	//Calculates
  	var jsonObj = JSON.parse(jsonRequest);
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
      	}
    	let jsonOkObj = [JSON.parse(data)] // without brackets it reverts an error
    	jsonOkObj.push(data)
    	let outputData = JSON.stringify(jsonOkObj, null, 2);
	//Calculates
    response.send(outputData);
});
app.listen(3000);
