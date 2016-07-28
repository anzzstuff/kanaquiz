import React, { Component, PropTypes as T } from 'react';
import AuthService from '../../utils/AuthService'
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginButton = this.loginButton.bind(this);
    }

    logout() {
/*        this.props.auth.logout()
        this.setState({
            profile: this.props.auth.getProfile()
        }) */
    }

    loginButton() {
        if(this.props.profile.hasOwnProperty('user_id'))
            return <button className="btn-primary" onClick={this.logout.bind(this)}>Log out</button>;
        else
            return <button className="btn-primary" onClick={this.props.auth.login.bind(this)}>Login</button>;
    }

    render() {
        return (
            <div>{this.loginButton()}</div>
        )
    }
}

Login.propTypes = {
    auth: T.instanceOf(AuthService)
};

export default Login;