import { CONFIG } from './config/communication';

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

export default app;
