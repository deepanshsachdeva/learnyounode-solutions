var net = require('net');
var port = process.argv[2];

function appZero(k){
  return (k<10?"0":"")+k;
}

var server = net.createServer(function(socket){
  var date = new Date();
  var data = "";
  data = date.getFullYear()+"-"+appZero(date.getMonth()+1)+"-"+appZero(date.getDate())+" "+appZero(date.getHours())+":"+appZero(date.getMinutes())+"\n";

  socket.end(data);
});

server.listen(port);
