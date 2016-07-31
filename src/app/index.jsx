import React from 'react';
import { render } from 'react-dom';
import Messages from './items/Messages.jsx';



class App extends React.Component {
  render () {
    return (
    	<div id="app">

				<p> Hello React!</p>
				<Messages/>

			</div>
		);
  }
}

render(<App/>, document.getElementById('app'));