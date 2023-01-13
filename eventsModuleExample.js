/*
    EXAMPLE #1:
    Event Emmitter.
    Documentation: https://nodejs.org/dist/latest-v18.x/docs/api/events.html#:~:text=rejections%20of%20promises-,Class%3A%20EventEmitter,-Event%3A%20%27newListener
*/
const events = require("events");

let emitter = new events.EventEmitter(); //Create instance of event emitter

/*  emitter.on(eventName, listener)
    
    eventName <string> | <symbol> The name of the event.
    listener <Function> The callback function
    Returns: <EventEmitter>
*/
emitter.on("Custume Event Example", (user, message) => {
    console.log(`Costume Event: ${user} - ${message}`)
});

/*  emitter.emit(eventName[, ...args])#
    
    eventName <string> | <symbol>
    ...args <any>
    Returns: <boolean>
*/

// emitter.emit("Custume Event Example", "Itzel", "Hello World!!");


/*
    EXAMPLE #2:
*/

process.stdin.on("data", (data) =>{
    const input = data.toString().trim();

    if(input.toLowerCase() === "exit"){
        emitter.emit("Custume Event Example", "process", "Thank you, goodbye!");
        process.exit()
    }
    emitter.emit("Custume Event Example", "Terminal", input);
});