import React from 'react';
import { ChatroomService } from '../models/Chatrooms';

class Chatrooms extends React.Component {

	constructor(props) {
		super(props);

		// set INITIAL state
		this.state = {
			chatrooms: []
		};

		// should print config object to console
		this.roomService = new ChatroomService();
	}


	componentDidMount() {
		this.roomService.receiveInitialChatrooms().then(page => this.setState({ chatrooms: page.data.reverse() }));

		let updateCallback = room => {
			this.setState({
				chatrooms: this.state.chatrooms.concat(room)
			});
		};

		this.roomService.updateChatroom(updateCallback);
	}


	componentDidUpdate() {
		var elem = document.querySelector('#chatrooms-area');
		elem.scrollTop = elem.scrollHeight;
	}


	render() {
		console.log("Chatrooms Props: ");
		console.dir(this.props);

		console.log("Chatrooms State: ");
		console.log(this.state.chatrooms);

		var chatrooms = [];
		for (var i = 0; i < this.state.chatrooms.length; i++) {
			chatrooms.push(<div className='chatroom-entry' key={i}>
				{this.state.chatrooms[i].title}
			</div>);
		}

		return (
			<div id="chatrooms-area">

				{chatrooms}

			</div>
		);
	}
}

export default Chatrooms;
