import React from 'react';
import { render } from 'react-dom';
import Messages from './components/Messages.jsx';
import NewMessage from './components/NewMessage.jsx';
import LoginLogout from './components/LoginLogout.jsx';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				loggedIn: false,
				username: undefined,
				user_color: undefined
			}
		};
		this.loginUser = this.loginUser.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	loginUser(user) {
		console.log("login User called for: " + user);

		var red = Math.random()*255|0;
		var green = Math.random()*255|0;
		var blue = Math.random()*255|0;
		var color = "rgb(" + red + "," + green + "," + blue + ")";

		this.setState({
			user: {
				loggedIn: true,
				username: user,
				user_color: color
			}
		});
	}

	logoutUser() {
		this.setState({
			user: {
				loggedIn: false,
				username: undefined,
				user_color: undefined
			}
		});
	}

  render () {
    return (
    	<section id="app">

				<div id="header">
					<span className="title">
						grazJS chat app
					</span>

					<span className="author">
						...by Bernd Malle
					</span>

					<span id="login-logout">
						<LoginLogout onLogin={this.loginUser}
												 onLogout={this.logoutUser}
					 							 user={this.state.user}/>
					</span>

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

			</section>
		);
  }
}

render(<App/>, document.querySelector('body'));