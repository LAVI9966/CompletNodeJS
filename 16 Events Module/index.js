//Events module
//node js has a built-in module called "Events"
//where you can create , fire , and listen for your own events

//example 1 = registering for the event to be fired only one time using once
//example 2 = create an event emitter instance and register a couple of callbacks
//example 3 = Registering for the event with callback parametes

//1
//same spelling likhna padegi same to same
const EventEmitter = require('events')
const event = new EventEmitter();//clsaa ka instance banaya he

//pahle event register karna padega
//bi event.on(eventname,()={jo karana ho}) method
//2
event.on('saymyname',()=>{
    console.log('my name is lavish gehlod');
})
event.on('saymyname',()=>{
    console.log('my name is lavish gehlod 2');
})
event.on('saymyname',()=>{
    console.log('my name is lavish gehlod 3');
})
event.on('saymyname',()=>{
    console.log('my name is lavish gehlod 4');
})
event.on('saymyname2',(sc,s)=>{
    console.log(`my name is lavish gehlod 3 code ${sc} status ${s}`);
})

//registered event ko call kara
//ek event se multiple kam kara skte he
event.emit('saymyname')

//3
//parameter bhi pass kara sakte he
event.emit('saymyname2',200,'ok');