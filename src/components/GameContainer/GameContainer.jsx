import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import ChooseCharacters from '../ChooseCharacters/ChooseCharacters';
import Game from '../Game/Game';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        this.state = {
            decidedGroups: ['h_group1', 'h_group3']
        }
    }

    startGame(decidedGroups) {
        // console.log(options); // prints array
        this.setState({decidedGroups: decidedGroups});
        this.props.handleStartGame();
    }

    render() {
        return (
            <div>
                { this.props.gameState==='chooseCharacters' ? 
                    <ChooseCharacters selectedGroups={this.state.decidedGroups} 
                                handleStartGame={this.startGame} 
                                nickName={this.props.nickName} 
                    /> : '' }
                { this.props.gameState==='game' ? 
                    <Game decidedGroups={this.state.decidedGroups} 
                    /> : '' }
            </div>
        )
    }
}

export default GameContainer;