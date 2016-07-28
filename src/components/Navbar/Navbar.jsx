import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        let profileButton = this.props.isAuthenticated ?
            <a href="#" onClick={this.props.handleLogout}><span className="glyphicon glyphicon-small glyphicon-user"></span> {this.props.nickName}</a> :
            <a href="#" onClick={this.props.handleLogin}><span className="glyphicon glyphicon-small glyphicon-user"></span> Log in</a>;
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div id="navbar">
                        <ul className="nav navbar-nav">
                            <li id="nav-kanaquiz"><a href="javascript:;">Kana Quiz 2</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li id="nav-settings"><a href="#"><span className="glyphicon glyphicon-small glyphicon-cog"></span> Settings</a></li>
                            <li id="nav-profile">{profileButton}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
//            <div>{this.props.profile.hasOwnProperty('user_id')?this.props.profile.name+' is logged in':'not logged in'}</div>
                        // <ul className="nav navbar-nav">
                        //     <li id="nav-about"><a href="#menu">&lt; Back to menu</a></li>
                        // </ul>

export default Navbar;