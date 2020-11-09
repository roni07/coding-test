import './App.css';
import React from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Form from "./components/form/Form";
import Design from "./components/design/Design";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/design" component={Design}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
