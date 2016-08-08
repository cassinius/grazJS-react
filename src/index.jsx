import React from 'react';
import { render } from 'react-dom';
import Messages from './items/Messages.jsx';


class App extends React.Component {
  render () {
    return (
    	<section id="app">

				<div id="header">
					grazJS Talk "Small foot-print pub/sub with feathers and react JS.
				</div>

				<div id="nested-container">

						<div id="chatroom-list">

						</div>


						<div id="chatroom">

							<div id="messages-area">
								<Messages/>
							</div>

							<div id="newMessageArea">

							</div>

						</div>


				</div>

				<div id="footer">
					by Bernd Malle
				</div>

			</section>
		);
  }
}

render(<App/>, document.querySelector('body'));