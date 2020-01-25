import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/home/home.js";
import Events from "./pages/events/events";

import './App.css';


const  App = () => {
    let date = new Date(2020, 2, 7, 21, 0, 0, 0);
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <div className={"MainContainer"}>
                    <Switch>
                        <Route exact path="/">
                            <Home date={date}/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/signup">
                            <SignUp/>
                        </Route>
                        <Route>
                            <Events/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};


const Navigation = () => {
    return <nav className={"Navigation"}>
        <Link className={"Link"} to={"/"}>Home</Link>
        <Link className={"Link Signup"} to={"/signup"}>Signup</Link>
        <Link className={"Link"} to={"/contact"}>Contact</Link>
        <Link className={"Link"} to={"/events"}>Events</Link>
    </nav>
};


const Contact = () => {
    return <div>contact</div>
};


const SignUp = () => {
    return <div>Sign Up</div>
};

const Footer = () => {
    return <div className={"Footer"}>
        <img className={"Logo"} alt="Inkubio logo"
             src={"https://www.inkubio.fi/wp-content/themes/suurinkubio/assets/images/inkulogo-viher.svg"}/>
    </div>
};

export default App;
