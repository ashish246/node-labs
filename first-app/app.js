// const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');
// const EventEmitter = require('events');
// const emitter = new EventEmitter()

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Ashish');

// // console.log(window);

// console.log(); //global object/scope
// setTimeout();//global object/scope
// clearTimeout();//global object/scope

console.log(module)
// console.log(logger)
// logger('Ashish, Hello');
// logger.myLog('Ashish, Hello');

var pathObj = path.parse(__filename);
console.log(pathObj);

var freemem = os.freemem();
// console.log(freemem);
console.log(`Free Memory: ${freemem}`);

var filesSync = fs.readdirSync('./')
console.log(filesSync)
fs.readdir('./',function(err, files){
    if (err) console.log('Error: ', err);
    else console.log(files);
})
// console.log(files)


const Logger = require('./Logger');
const logger = new Logger()
// Register a listener using AtListener() or On() methods
logger.on('MessageLogged', (arg) => {
    console.log('Listener called.', arg)
})
logger.log('Ashish, Hello');


var server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello, World');
        res.end();
    }

    if (req.url === '/home'){
        res.write(JSON.stringify([1,2,3, 'Hello, Home World']));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New connetion');
// })
server.listen(3001);
console.log('Listening on port 3001...');