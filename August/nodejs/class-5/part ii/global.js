'use strict';

/**
 * Global Variables/Objects
 */

// shows entire path
console.log(__dirname);

// shows entire path plus filename
console.log(__filename);

var buff = new Buffer('Hello, world');

console.log(buff.toString());

setTimeout(function () {
    console.log('Hello async func');
}, 1000);

const time = setInterval(() => console.log('Hello async'), 1000);

setTimeout(() => {
    clearInterval(time);
}, 5000);

// clearTimeout

