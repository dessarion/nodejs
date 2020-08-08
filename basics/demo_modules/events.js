const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('ON: anything', data);
// })

// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})

// setInterval(() => {
//     let index = 0
//     emitter.emit('anything', {c: index})
    
// }, 500);

class Dispatcher extends EventEmitter {
    subscribe(eventName, callBack) {
        console.log(`[Subscribed: ${eventName}]`);
        this.on(eventName, callBack)
    }

    dispatch(eventName, data){
        console.log('Dispatching');
        this.emit(eventName, data)
    }
}

const disp = new Dispatcher()

disp.subscribe('Test Event', data => {
    console.log(`ON: Test Event:` , data);
})

disp.dispatch('Test Event', {
    name: 'Inportant Name'
})