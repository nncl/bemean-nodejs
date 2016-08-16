
/**
 * Process
 */

'use strict';

const http = require('http');

// Will be executed later, cause it's async
// the others are all sync, the logs
process.nextTick(() => {
    console.log('Hi, Im async.');
});

// shows where node is installed
console.log(process.execPath);

// shows same as __dirname - current directory
console.log(process.cwd());

// shows process id
console.log(process.pid);

let server = http.createServer((req, res) => {
    // ...
});

server.listen(3000, () => {
    console.log('Im on');
});

process.on('SIGINT', () => {
    console.log('Im out');
    process.exit();
});