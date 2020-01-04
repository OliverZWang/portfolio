import React from 'react';
import './App.css';
import AppBar from './components/Header'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
    <div className="App">
		<Router>
			<AppBar></AppBar>
			<Switch>
				{/* <Route exact path="/"/> */}
				<Route exact path="/" component={AboutMe} />
				<Route exact path="/projects" component={Projects}/>
				<Route exact path="/contact" component={Contact}/>
			</Switch>
		</Router>
		
      
    </div>
    );
}

export default App;
