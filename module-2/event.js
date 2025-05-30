
// 13-1 What is an event module?
const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
    console.log("Yahoo!! Class Sesh!");
})
schoolBell.on("ring", () => {
    console.log("Dhet!! Arekta Class ache!");
})
schoolBell.on("broken", () => {
    console.log("Oh No! Class ki ar sesh hobe na");
})


schoolBell.emit("ring");
// schoolBell.emit("broken");



// class MyEmitter extends EventEmitter { }

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//     console.log('an event occurred!');
// });
// myEmitter.emit('event');