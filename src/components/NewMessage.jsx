import React from 'react';
import { MsgsClass } from '../models/Messages';

class NewMessage extends React.Component {

	constructor(props) {
		super(props);
		this.messenger = new MsgsClass();
	}

	handleKeyUp(e) {
		let ENTER = 13;
		if( e.ctrlKey && e.keyCode === ENTER ) {
			this.sendMessage(e);
		}
	}


	sendMessage(e) {
		let msg = this.refs.msgBox.value;
		if (msg == null || msg === "") {
			e.preventDefault();
			return false;
		}

		this.messenger.sendMessage(msg);
		this.refs.msgBox.value = "";
		e.preventDefault();
		return false;
	}


	render() {
		return (
			<div id="new-msg">

				<div id="textbox-container">
					<textarea ref="msgBox"
										placeholder="Tell us how it is... (Ctrl+Enter submits)"
										maxLength="1024"
										onKeyUp={(e) => {this.handleKeyUp(e)}}/>
				</div>

				<div id="send-message">
					<i className="fa fa-paper-plane" onClick={(e) => {this.sendMessage(e)}}/>
				</div>

			</div>
		);
	}
}

export default NewMessage;