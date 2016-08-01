import React from 'react';
import { MsgsClass } from '../models/Messages';

console.log(MsgsClass);

class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

		// should print config object to console
		var msg = new MsgsClass();
  }

  handleClick() {
    console.log(this); // React Component instance
  }

  render() {
    return (
      <div id="messages" className="bigmess" onClick={this.handleClick}>
        <h2>Click here to see this object...</h2>
      </div>
    );
  }
}

export default Messages;