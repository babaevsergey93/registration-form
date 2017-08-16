import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from '../components/Main/Main'
import RegistrationForm from '../components/Registration/Registration';
import AuthorizationForm from '../components/Authorization/Authorization';


export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path="/authorization" component={AuthorizationForm} />
                <Route path="/registration" component={RegistrationForm} />
            </Switch>
        )
    }
};