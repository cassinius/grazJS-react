import app from '../feathersApp';


class ChatroomService {

	constructor() {
		this.service = app.service('chatrooms');
		this.service.on('created', message => console.log('Created a Chatroom', message));
	}

	sendMessage(title) {
		this.service.create({
			title: title,
			date: +new Date
		});
	}

	updateChatroom(updateCallback) {
		this.service.on('created', updateCallback);
	}

	receiveInitialChatrooms() {
		// returns a promise
		return this.service.find({
			query: {
				$sort: { date: -1 }
			}
		});
	}

}

export { ChatroomService }
