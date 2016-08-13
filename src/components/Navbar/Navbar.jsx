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
                leftLink = <li id="nav-choosecharacters"><a href="javascript:;" onClick={this.props.handleEndGame}><span className="glyphicon glyphicon-small glyphicon-arrow-left"></span> Back to menu</a></li>
        }
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div id="navbar">
                        <ul className="nav navbar-nav">
                            {leftLink}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;