import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './components/home/Home';
import LoginPage from './components/login/Login';
import RegisterPage from './components/register/Register';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                        <BrowserRouter >
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/login" />
                                    </Route>
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    <Route path="/home" component={HomePage}/>
                                </Switch>
                        </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;