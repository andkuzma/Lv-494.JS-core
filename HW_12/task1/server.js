const http = require('http');
const url = require('url');
const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.');


function acc(req, res) {
  if (req.url == '/vote') {  

    setTimeout(function() {
      res.end('Your vote is accepted: ' + new Date());
    }, 2000);

  } else {   
    file.serve(req, res); 
  }

}

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.acc = acc;
}
