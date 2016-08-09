import app from '../feathersApp';


class MsgsClass {

	constructor() {
		this.messageService = app.service('messages');
		this.messageService.on('created', message => console.log('Created a message', message));
	}

	sendMessage(msg, user, roomID) {
		this.messageService.create({
			text: msg,
			date: +new Date,
			user: user,
			roomID: roomID
		});
	}

	updateMessage(updateCallback) {
		this.messageService.on('created', updateCallback);
	}

	receiveInitialMessages(roomID) {
		console.log("Searching for room ID: " + roomID);
		// returns a promise
		return this.messageService.find({
			query: {
				roomID: roomID || " ",
				$sort: { date: -1 }
			}
		});
	}

}

export { MsgsClass }
