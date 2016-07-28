import React, { Component } from 'react';
import AuthService from '../../utils/AuthService'
import './App.scss';
import MainMenu from '../MainMenu/MainMenu';
import Login from '../Login/Login';

const options = {
    auth: {
        params: {
            redirectUrl: 'http://localhost:8080',
            responseType: 'token'
        }
    }
};
const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, options);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: auth.getProfile()
        }
        auth.on('profile_updated', (newProfile) => {
            this.setState({profile: newProfile})
        })
        this.loginButton = this.loginButton.bind(this);
    }

    logout() {
        auth.logout()
        this.setState({
            profile: auth.getProfile()
        })
    }

    loginButton() {
        if(this.state.profile.hasOwnProperty('user_id'))
            return <button className="btn-primary" onClick={this.logout.bind(this)}>Log out</button>;
        else
            return <button className="btn-primary" onClick={auth.login.bind(this)}>Login</button>;
    }

    render() {
        return (
            <div>
                <MainMenu profile={this.state.profile} />
                {this.loginButton()}
            </div>
        )
    }
}
//                 <Login profile={this.state.profile} />

export default App;