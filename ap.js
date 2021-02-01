const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    res.end(data.toString());
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function fileread(filename) {
    var contents = fs.readFileSync(filename);
    return contents;
}
var fs = require("fs"); // file system        
var data = fileread("leia.txt");
//module.exports.say =say;
//data.say();