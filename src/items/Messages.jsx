import React from 'react';
import { MsgsClass } from '../models/Messages';

console.log(MsgsClass);

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


  componentDidMount() {
    this.msg.receiveInitialMessages().then(page => this.setState({ messages: page.data.reverse() }));

    this.msg.msgService.on('created', message => {
      var remaining_msgs = this.state.messages.slice(0, 19);
      this.setState({
        messages: [message].concat(remaining_msgs)
      });
    });
  }


  render() {
    console.log("Props: ");
    console.dir(this.props);

    console.log("State: ");
    console.log(this.state.messages);

    var messages = [];
    for (var i = 0; i < this.state.messages.length; i++) {
      messages.push(<div className='msg' key={i}>
        {this.state.messages[i].text}
        {/*<br/>"Msg entry"*/}
      </div>);
    }

    return (
      <div id="messages" className="bigmess"
           onClick={(e) => {
             this.msg.sendMessage("hi there from Desktop!");
             e.preventDefault();
           }}
           onTouchStart={(e) => {
             this.msg.sendMessage("hi there from Tablet!");
             e.preventDefault();
           }}>
        <h2>Click here to see this object...</h2>

        {messages}

      </div>
    );
  }
}

export default Messages;
