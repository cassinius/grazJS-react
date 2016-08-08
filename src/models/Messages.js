import app from '../feathersApp';

const messageService = app.service('messages');

messageService.on('created', message => console.log('Created a message', message));


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

	updateMessage(updateCallback) {
		messageService.on('created', updateCallback);
	}

	receiveInitialMessages() {
		// returns a promise
		return messageService.find({
			query: {
				$sort: { date: 1 }
			}
		});
	}

}

export { MsgsClass }
