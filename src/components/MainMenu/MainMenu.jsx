import React, { Component } from 'react';
import './MainMenu.scss';

class MainMenu extends Component {
    render() {
        return (
            <div>{this.props.profile.hasOwnProperty('user_id')?this.props.profile.name+' is logged in':'not logged in'}</div>
        )
    }
}

export default MainMenu;