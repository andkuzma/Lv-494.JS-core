const http = require('http');
const os = require('os');
const welcome = require('C:\\Users\\AnD\\Documents\\GitHub\\Lv-494.JS-core\\HW_11\\personalModule');

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.end(welcome.greetUser(os.userInfo().username));

}).listen(5000);










