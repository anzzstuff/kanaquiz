import React, { Component } from 'react';
import ChooseCharacters from '../ChooseCharacters/ChooseCharacters';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
    }

    startGame(options) {
        this.props.handleStartGame();
    }

    render() {
        let currentScreen = this.props.gameState==='chooseCharacters' ? <ChooseCharacters handleStartGame={this.startGame} nickName={this.props.nickName} /> :
                            (this.props.gameState==='game' ? '<Game />' : '');
        return (
            <div>
                {currentScreen}
            </div>
        )
    }
}

export default GameContainer;