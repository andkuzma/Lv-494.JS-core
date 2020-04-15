const http = require('http');
const os = require('os');
const path = require('path');



http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.end(`<h1>System information</h1>

    Current user name: ${os.userInfo().username}<br>
    OS type: ${os.type}<br>
    System work time: ${Math.round(os.uptime() / 60)} minutes<br>
    Current work directory: ${path.dirname('C:\\Users\\AnD\\Documents\\GitHub\\Lv-494.JS-core\\HW_11')}<br>
    Server file name: ${path.basename('C:\\Users\\AnD\\Documents\\GitHub\\Lv-494.JS-core\\HW_11\\server.js')}`);

}).listen(5000);











