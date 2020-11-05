import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"

import Resume from './components/views/Resume';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Projects from './components/views/Projects';
import Game from './components/Layout';

function App() {
	return (
	<Router>
		<Navbar></Navbar>
        <Switch>
            <Route path='/' exact component={About} />
            <Route path='/Game' component={Game}/>
            <Route path='/Resume' component={Resume}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>
    </Router>
	)
}

export default App;