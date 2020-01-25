import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/home/home.js";
import Events from "./pages/events/events";
import strings from "./utils/translations";
import eventLogo from "./assets/logo.png";

import './App.css';


const  App = () => {
    let date = new Date(2020, 2, 7, 21, 0, 0, 0);
    const [lang,setLang] = useState('fi');
    return (
        <Router>
            <div className="App">
                <Navigation setLang={setLang}/>
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


const Navigation = ({setLang}) => {
    return <nav className={"Navigation"}>
        <div className={"Filler"}>FI/EN</div>
         <div className={"NavItems"}>
             <Link className={"Link"} to={"/"}>{strings.home}</Link>
             <Link className={"Link Signup"} to={"/signup"}>{strings.signUp}</Link>
             <Link className={"Link"} to={"/contact"}>{strings.contact}</Link>
             <Link className={"Link"} to={"/events"}>{strings.events}</Link>
         </div>
        <div className={"Language"}>
            <button onClick={() => {
                setLang('fi');
                strings.setLanguage('fi');
            }}>FI</button>/<button onClick={() => {
                setLang('en');
                strings.setLanguage('en');
            }}>EN</button>
        </div>
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
