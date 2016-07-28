import React, { Component } from 'react';
import AuthService from '../../utils/AuthService'
import './App.scss';
import Navbar from '../Navbar/Navbar';

const options = {};
const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, options);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: this.isAuthenticated(),
            /*profile: auth.getProfile()*/
        }
        auth.on('profile_updated', (newProfile) => {
            // do i need a check for valid profile?
            this.setState({isAuthenticated: this.isAuthenticated(), /*profile: newProfile*/});
        })
        this.logout = this.logout.bind(this);
        this.getNickName = this.getNickName.bind(this);
    }

    isAuthenticated() {
        return auth.getProfile() && auth.getProfile().hasOwnProperty('user_id');
    }

    getNickName() {
        return auth.getProfile() && auth.getProfile().hasOwnProperty('nickname')?auth.getProfile().nickname:'';
    }

    logout() {
        auth.logout();
        this.setState({isAuthenticated: this.isAuthenticated()});
    }

    render() {
        let loginButton = !this.state.isAuthenticated ? 
            <button className="btn btn-info login-button" onClick={auth.login.bind(this)}>Log in to save your progress!</button> : '';

        return (
            <div>
                <Navbar isAuthenticated={this.state.isAuthenticated} nickName={this.getNickName()} handleLogin={auth.login.bind(this)} handleLogout={this.logout} />
                <div className="container game">
                    <div className="row text-center">{loginButton}</div>
                </div>
            </div>
        )
    }
}

export default App;