import app from '../feathersApp';


class MsgsClass {

	constructor() {
		this.messageService = app.service('messages');
		this.messageService.on('created', message => console.log('Created a message', message));
	}

	sendMessage(msg, user) {
		this.messageService.create({
			text: msg,
			date: +new Date,
			user: user
		});
	}

	updateMessage(updateCallback) {
		this.messageService.on('created', updateCallback);
	}

	receiveInitialMessages() {
		// returns a promise
		return this.messageService.find({
			query: {
				$sort: { date: -1 }
			}
		});
	}

}

export { MsgsClass }
