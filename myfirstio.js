var fs = require('fs');

var path = process.argv[2];

var buffer = fs.readFileSync(path);

var data = buffer.toString();

console.log(data.split('\n').length-1);
