import React from 'react';
import './App.css';
import AppBar from './components/Header'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe'; 

function App() {
	return (
    <div className="App">
		<Router>
			<AppBar></AppBar>
			<Switch>
				<Route exact path="/"/>
				<Route exact path="/about-me" component={AboutMe} />
			</Switch>
		</Router>
		
      
    </div>
    );
}

export default App;
