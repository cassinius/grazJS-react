import React from 'react';
import { MsgsClass } from '../models/Messages';

class Messages extends React.Component {


  constructor(props) {
    super(props);

    // set INITIAL state
    this.state = {
      messages: []
    };

		// should print config object to console
		this.msg = new MsgsClass();
  }

  initializeMessages() {
    this.msg.receiveInitialMessages(this.props.room)
      .then(page => this.setState({ messages: page.data.reverse() }));
  }

  componentDidMount() {
    this.initializeMessages();

    let updateCallback = message => {

      // check if message is for the right room...
      if ( message.roomID === this.props.room ) {
        this.setState({
          messages: this.state.messages.concat(message)
        });
      }

    };

    this.msg.updateMessage(updateCallback);
  }


  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.room !== this.props.room ) {
      this.initializeMessages();
    }

    var elem = document.querySelector('#messages-area');
    elem.scrollTop = elem.scrollHeight;
  }

  getUserSymbol(user) {
    let userImage = null;

    if ( user ) {
      let userStyle = {
        background: user.user_color
      };
      let initials = user.username.split(" ").splice(0, 2).map((i) => {
          return i[0]
        }).join(".") + ".";

      userImage = <span className="user-img" style={userStyle}>{initials}</span>;
    }
    else {
      userImage = <img className="user-img" src="/assets/img/anonymous.png"/>;
    }
    return userImage;
  }

  render() {
    var messages = [];
    for (var i = 0; i < this.state.messages.length; i++) {
      messages.push(
        <div className='message' key={i}>
          {this.getUserSymbol(this.state.messages[i].user)}
          <span className="msgText">
            {this.state.messages[i].text}
          </span>
        </div>);
    }

    return (
      <div id="messages" className="bigmess">
        <h2>Welcome to this chat room</h2>

        {messages}

      </div>
    );
  }
}

export default Messages;

// onClick={(e) => {
//   this.msg.sendMessage("hi there from Desktop!");
//   e.preventDefault();
// }}
// onTouchEnd={(e) => {
//   this.msg.sendMessage("hi there from Tablet!");
//   e.preventDefault();
// }}