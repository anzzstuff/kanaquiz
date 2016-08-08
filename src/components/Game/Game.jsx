import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import './Game.scss';
import ShowStage from './ShowStage';
import Question from './Question';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage:0,
            isLocked: false,
            showScreen: ''
        }
        this.showQuestion = this.showQuestion.bind(this);
        this.stageUp = this.stageUp.bind(this);
        this.lockStage = this.lockStage.bind(this);
    }

    stageUp() {
        this.setState({stage: this.state.stage+1, showScreen: 'stage'});
    }

    lockStage(stage) {
        this.setState({stage: stage, showScreen: 'question', isLocked: true});
    }

    showQuestion() {
        this.setState({showScreen: 'question'})
    }

    componentWillMount() {
        this.stageUp();
    }

    render() {
        return (
            <div>
                { this.state.showScreen==='stage' ? <ShowStage lockStage={this.lockStage} handleShowQuestion={this.showQuestion} handleEndGame={this.props.handleEndGame} stage={this.state.stage} /> : '' }
                { this.state.showScreen==='question' ? <Question isLocked={this.state.isLocked} handleStageUp={this.stageUp} stage={this.state.stage} decidedGroups={this.props.decidedGroups} /> : '' }
            </div>
        );
    }
}

export default Game;