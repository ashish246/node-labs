// var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
// const emitter = new EventEmitter()

class Logger extends EventEmitter{
    log(message) {
        // Send an HTTP request
        console.log(message)
        
        // Raise an event
        // emitter.emit('MessageLogged', 1, 'url') // pass params directly
        this.emit('MessageLogged', {id: 1, url: 'url'}) // wrap arguments into an object
    }
}




// module.exports.myLog = log; // Export as a object and then call each function
// module.exports = log; //Export as a function directly if file has only one function
module.exports = Logger; //Export the Logger class
