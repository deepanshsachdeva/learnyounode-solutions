var fs = require('fs');

module.exports = function(dir, ext, callback){
  var fileList = [];
  var i = 0;

  fs.readdir(dir, function(err, list){
    if(err){
      return callback(err);
    }else{
      list.forEach(function(filename){
        if(filename.indexOf("."+ext) > 0){
          fileList[i++] = filename;
        }
      });
      return callback(null, fileList);
    }
  });
}
