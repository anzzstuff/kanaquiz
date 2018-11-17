import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div id="navbar">
            <ul className="nav navbar-nav">
              {
                this.props.gameState == 'game' ? (
                  <li id="nav-choosecharacters">
                    <a href="javascript:;" onClick={this.props.handleEndGame}>
                      <span className="glyphicon glyphicon-small glyphicon-arrow-left"></span> Back to menu
                    </a>
                  </li>
                ) : <li id="nav-kanaquiz"><p className="nav navbar-text">Kana Pro</p></li>
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
