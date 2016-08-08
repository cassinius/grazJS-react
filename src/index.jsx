import React from 'react';
import { render } from 'react-dom';
import Messages from './components/Messages.jsx';
import NewMessage from './components/NewMessage.jsx';


class App extends React.Component {
  render () {
    return (
    	<section id="app">

				<div id="header">
					Multi-room chat app

					<img id="logo-img" src="/assets/img/grazJSLogo.jpeg"/>
				</div>

				<div id="nested-container">

						<div id="chatroom-list">
							<h3> Available rooms </h3>
						</div>


						<div id="chatroom">

							<div id="messages-area">
								<Messages/>
							</div>

							<div id="newMessageArea">
								<NewMessage/>
							</div>

						</div>


				</div>

				{/*<div id="footer">*/}
					{/*Multi-Room Chat App by Bernd Malle*/}
				{/*</div>*/}

			</section>
		);
  }
}

render(<App/>, document.querySelector('body'));