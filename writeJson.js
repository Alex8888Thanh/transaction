const fs = require('fs');
let trans = {
  "transaction": "460a2954c14987bff60478069ea89f2b",
  "transformations": [
    {
      "partNum": "SL1524042H2S",
      "qty": -1,
      "size": 12
    },
    {
      "partNum": "SL1524042H2S",
      "qty": 2,
      "size": 6
    }
  ],
  "balance": 0,
  "isValid": true,
  "errorReason": null
}
let data = JSON.stringify(trans, null, 2);
fs.writeFile('./output-data.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
console.log('This is after the write call');
