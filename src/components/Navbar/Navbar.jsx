import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        let leftLink;
        switch(this.props.gameState) {
            case 'chooseCharacters':
            default:
                leftLink = <li id="nav-kanaquiz"><p className="nav navbar-text">Kana Quiz <span>2</span></p></li>
                break;
            case 'game':
                leftLink = <li id="nav-choosecharacters"><a href="#" onClick={this.props.handleEndGame}><span className="glyphicon glyphicon-small glyphicon-arrow-left"></span> Back to menu</a></li>
        }
        let profileButton = this.props.isAuthenticated ?
            <a href="#" onClick={this.props.handleLogout}><span className="glyphicon glyphicon-small glyphicon-log-out"></span> Log out</a> :
            <a href="#" onClick={this.props.handleLogin}><span className="glyphicon glyphicon-small glyphicon-log-in"></span> Log in</a>;
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div id="navbar">
                        <ul className="nav navbar-nav">
                            {leftLink}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li id="nav-profile">{profileButton}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
                            // <li id="nav-settings"><a href="#"><span className="glyphicon glyphicon-small glyphicon-cog"></span><span className="hidden-nano"> Settings</span></a></li>

//            <div>{this.props.profile.hasOwnProperty('user_id')?this.props.profile.name+' is logged in':'not logged in'}</div>
                        // <ul className="nav navbar-nav">
                        //     <li id="nav-about"><a href="#menu">&lt; Back to menu</a></li>
                        // </ul>

export default Navbar;