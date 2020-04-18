const http = require('http');
const url = require('url');
const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.');


function acc(req, res) {
  if (req.url == '/books.json') {  

    file.serve(req, res); 
  } else {   
    file.serve(req, res); 
  }

}

if (!module.parent) {
  http.createServer(acc).listen(8080);
} else {
  exports.acc = acc;
}
