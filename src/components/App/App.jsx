import React, { Component } from 'react';
import AuthService from '../../utils/AuthService'
import './App.scss';
import Navbar from '../Navbar/Navbar';
import GameContainer from '../GameContainer/GameContainer';

const options = {};
const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, options);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: this.isAuthenticated(),
            gameState: 'game'
            /*profile: auth.getProfile()*/
        }
        auth.on('profile_updated', (newProfile) => {
            // do i need a check for valid profile?
            this.setState({isAuthenticated: this.isAuthenticated(), /*profile: newProfile*/});
        })
        this.logout = this.logout.bind(this);
        this.getNickName = this.getNickName.bind(this);
        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    isAuthenticated() {
        return auth.getProfile() && auth.getProfile().hasOwnProperty('user_id');
    }

    getNickName() {
        return auth.getProfile() && auth.getProfile().hasOwnProperty('nickname')?auth.getProfile().nickname:'';
    }

    startGame() {
        this.setState({gameState: 'game'});
    }

    endGame() {
        this.setState({gameState: 'chooseCharacters'});
    }

    logout() {
        auth.logout();
        this.setState({isAuthenticated: this.isAuthenticated()});
    }

    render() {
        let loginButton = !this.state.isAuthenticated ?
            <p className="login-button"><a href="#" onClick={auth.login.bind(this)}>Log in to save your progress!</a></p> : '';

        return (
            <div>
                <Navbar isAuthenticated={this.state.isAuthenticated}
                        handleLogin={auth.login.bind(this)}
                        handleLogout={this.logout}
                        gameState={this.state.gameState}
                        handleEndGame={this.endGame} 
                />
                <div className="outercontainer">
                    <div className="container game">
                        <GameContainer
                                isAuthenticated={this.state.isAuthenticated}
                                nickName={this.getNickName()}
                                gameState={this.state.gameState}
                                handleStartGame={this.startGame} 
                        />
                        <div className="row text-center">{loginButton}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;