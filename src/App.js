import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from  "./pages/home/home.js";

import './App.css';


function App() {
  let date= new Date(2020,2,7,21,0,0,0);
  return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/">
              <Home date={date}/>
            </Route>
            <Route path="/home">
              <Home date={date}/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}
function Navigation() {
  return <nav className={"Navigation"}>
    test
  </nav>
}

function Contact() {
  return <div>contact</div>
}
function Signup() {
  return <div>signup</div>
}

function Footer() {
  return <div>
    <img className={"Logo"} src={"https://www.inkubio.fi/wp-content/themes/suurinkubio/assets/images/inkulogo-viher.svg"} />
  </div>
}

export default App;
