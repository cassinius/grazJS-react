import React from 'react';

class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this); // React Component instance
  }

  render() {
    return (
      <div id="messages" className="bigmess">
        <div onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default Messages;