var fs = require('fs');

var path = process.argv[2];
var ext = '.'+process.argv[3];
var fileList = [];
var i = 0;

fs.readdir(path, function(err, list){
  list.forEach(function(data){
    if(data.indexOf(ext)>0){
      console.log(data);
    }
  });
});
