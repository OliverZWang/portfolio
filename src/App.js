import React from 'react';
import './App.css';
import AppBar from './components/Header'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
    <div className="App">
		<Router>
			<AppBar></AppBar>
			<Switch>
				<Route exact path="/"/>
			</Switch>
		</Router>
		
      
    </div>
    );
}

export default App;
