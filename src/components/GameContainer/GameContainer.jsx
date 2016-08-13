import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import ChooseCharacters from '../ChooseCharacters/ChooseCharacters';
import Game from '../Game/Game';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        this.state = {
            stage:1,
            isLocked: false,
            decidedGroups: ['h_group3']
        }
        this.stageUp = this.stageUp.bind(this);
        this.lockStage = this.lockStage.bind(this);
    }

    startGame(decidedGroups) {
        this.setState({decidedGroups: decidedGroups});
        this.props.handleStartGame();
    }

    stageUp() {
        this.setState({stage: this.state.stage+1});
    }

    lockStage(stage, forceLock) {
        stage = parseInt(stage) || 1;
        if(stage<1 || stage>4) stage=1;
        if(forceLock)
            this.setState({stage: stage, isLocked: true});
        else
            this.setState({stage: stage, isLocked: !this.state.isLocked});
    }

    render() {
        return (
            <div>
                { this.props.gameState==='chooseCharacters' ?
                    <ChooseCharacters selectedGroups={this.state.decidedGroups}
                                handleStartGame={this.startGame}
                                isAuthenticated={this.props.isAuthenticated}
                                nickName={this.props.nickName}
                                stage={this.state.stage}
                                isLocked={this.state.isLocked}
                                lockStage={this.lockStage}
                    /> : '' }
                { this.props.gameState==='game' ?
                    <Game decidedGroups={this.state.decidedGroups}
                        handleEndGame={this.props.handleEndGame} 
                        stageUp={this.stageUp}
                        stage={this.state.stage}
                        isLocked={this.state.isLocked}
                        lockStage={this.lockStage}
                    /> : '' }
            </div>
        )
    }
}

export default GameContainer;