var fileModule = require('./module.js');

fileModule(process.argv[2], process.argv[3], function(err, list){
  if(err){
    throw err;
  }else{
    list.forEach(function(filename){
      console.log(filename);
    });
  }
});
