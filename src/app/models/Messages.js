const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

const socket = io('http://10.0.3.3:3030');
const app = feathers()
	.configure(hooks())
	.configure(socketio(socket));

const messageService = app.service('messages');


messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
messageService.create({
	text: 'Message from client @ ' + (new Date)
});