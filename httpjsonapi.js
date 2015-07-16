var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){

  var urlData = url.parse(req.url, true), ans;

  if(urlData.pathname === '/api/parsetime'){
    var date = new Date(Date.parse(urlData.query.iso));
    ans = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  if(urlData.pathname === '/api/unixtime'){
    ans = {unixtime : Date.parse(urlData.query.iso)};
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(ans));

}).listen(process.argv[2]);
