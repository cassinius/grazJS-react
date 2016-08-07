import app from '../feathersApp';

const messageService = app.service('messages');


messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
// messageService.create({
// 	text: 'Message from client @ ' + (new Date)
// });


class MsgsClass {

	constructor() {
		this.msgService = messageService;
	}

	sendMessage(msg) {
		messageService.create({
			text: msg,
			date: +new Date
		});
	}

	receiveInitialMessages() {
		// returns a promise
		return messageService.find({
			query: {
				$sort: { date: -1 },
				$limit: 15
			}
		});
	}

}

export { MsgsClass }
