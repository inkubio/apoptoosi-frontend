import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";


import {Home, Events, SignUp, Success} from "./pages";

import strings from "./utils/translations";

import './App.css';


const  App = () => {
    let date = new Date(2020, 2, 7, 15, 0, 0, 0);
    const [lang,setLang] = useState('fi');
    strings.setLanguage(lang);
    return (
        <Router basename={'/apoptoosi'}>
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
                        <Route exact path="/signup">
                            <SignUp/>
                        </Route>
                        <Route path="/signup/success">
                            <Success />
                        </Route>
                        <Route path="/edit">
                            TEST
                        </Route>
                        <Route path={"/events"}>
                            <Events/>
                        </Route>
                        <Redirect to="/"/>
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
             <Link className={"Link Home"} to={"/"}>{strings.home}</Link>
             <Link className={"Link Signup"} to={"/signup"}>{strings.signUp}</Link>
             <Link className={"Link Contact"} to={"/contact"}>{strings.contact}</Link>
             <Link className={"Link Events"} to={"/events"}>{strings.events}</Link>
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

const Footer = () => {
    return <div className={"Footer"}>
        <img className={"Logo"} alt="Inkubio logo"
             src={"https://www.inkubio.fi/wp-content/themes/suurinkubio/assets/images/inkulogo-viher.svg"}/>
    </div>
};

export default App;
