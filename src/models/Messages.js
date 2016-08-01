import { CONFIG } from '../config/communication';

const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

let env = CONFIG.development;
let connString = "http://" + env.HOST + ":" + env.PORT;

const socket = io(connString);
const app = feathers()
	.configure(hooks())
	.configure(socketio(socket));

const messageService = app.service('messages');


messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
// messageService.create({
// 	text: 'Message from client @ ' + (new Date)
// });


class MsgsClass {

	constructor() {
		console.log(CONFIG);
	}

}

export { MsgsClass }