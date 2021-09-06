import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import NavBar from "../NavBar";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
    const [active, setActive] = useState(1);
    const handleSelect = (eventKey) => {
        console.log(eventKey);
        setActive(eventKey)
    };
    
    // if(location.pathname === "/contact"){
    //     alert("Contact selected");
    // }
    // const locate = () => {
        console.log(window.location.pathname);
    // }

    //return JSX
    return (
        <Router>
            <header>
                <NavBar active={active} handleSelect={handleSelect}/>
            </header>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                <Route exact path="/home" render={() => (<Redirect to="/about"/>)}/>
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </Router>
    );
};

export default Header;