import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import './App.css' 

import Home from "./Home"
import About from "./About"
import Contacts from "./Contacts"

function App() {    
  return (
    <div>
    	<nav>
    		<Link to="/">Home</Link>
    		<Link to="/about">About</Link>
    		<Link to="/contacts">Contacts</Link>
    	</nav>
    	<Switch>
    		<Route exact path="/">
    			<Home />
    		</Route>
    		<Route path="/about">
    			<About />
    		</Route>
    		<Route path="/contacts">
    			<Contacts />
    		</Route>
    	</Switch>
    </div>
  )
}

export default App