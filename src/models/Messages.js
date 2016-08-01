import app from '../feathersApp';

const messageService = app.service('messages');


messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
// messageService.create({
// 	text: 'Message from client @ ' + (new Date)
// });


class MsgsClass {

	constructor() {
	}

}

export { MsgsClass }