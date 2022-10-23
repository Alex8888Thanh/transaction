
var express = require('express')
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.post('/jsons', function(request, response){
    console.log(request.body);      // JSON
    var jsonRequest = request.body;
	//Calculates
  	var jsonObj = JSON.parse(jsonRequest);
	var data = []
    	for(let i = 0;i<jsonObj.length;i++){
      	    let balance = 0
      	    let isValid = false
      	    for(let j = 0;j<jsonObj[i].transformations[j].length;j++){
                balance+=jsonObj[i].transformations[j].qty*jsonObj[i].transformations[j].size
      	    }
	    //A source partNum that does not match the child partNums
	    //Child parts shorter than 3 metres or longer than 12 metres
	    //Child parts that are not in increments of 0.3 metres within this range (i.e. 3, 3.3, 3.6, ... 11.7, 12)
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
    	let jsonOkObj = JSON.parse(data)
    	let outputData = JSON.stringify(jsonOkObj, null, 2);
	//Calculates
    response.send(outputData);
});
app.listen(3000);
