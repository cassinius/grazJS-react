import React from 'react';
import { CONFIG } from '../config/communication';

let env = CONFIG.development;
let authConnString = "http://" + env.HOST + ":" + env.PORT + "/auth/facebook";

class LoginLogout extends React.Component {

	constructor(props) {
		super(props);
	}

	loginUser(user) {
		this.props.onLogin(user);
	}

	logoutUser() {
		this.props.onLogout();
	}

	handleKeyUp(e) {
		let username = this.refs.username_login.value;
		let ENTER = 13;
		if( e.keyCode === ENTER ) {
			this.loginUser(username);
			this.refs.username_login.value = "";
		}
	}

	render() {
		let user = this.props.user;
		console.log("LoginLogout User:");
		console.dir(user);

		if ( user.loggedIn ) {
			let userStyle = {
				background: user.user_color
			};
			let initials = user.username.split(" ").splice(0, 2).map((i) => {return i[0]}).join(".") + ".";

			return (
				<span>
					<span id="user-img" style={userStyle}>{initials}</span>
					<span className="username-active" onClick={() => {this.logoutUser()}}>
						Logout {user.username}
					</span>
				</span>
			);
		}
		else {
			return (
				<span>
					<img id="user-img" src="/assets/img/anonymous.png"/>
					<input type="text" placeholder="enter username" ref="username_login"
								 onKeyUp={(e) => {this.handleKeyUp(e)}} />
				</span>
			);
		}
	}

}

export default LoginLogout;