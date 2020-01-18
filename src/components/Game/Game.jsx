import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import ShowStage from './ShowStage';
import Question from './Question';

class Game extends Component {
  state = {
    showScreen: '',
    scoreboard: {"1": {}, "2": {}, "3": {}, "4": {}}
  }

  componentWillMount() {
    this.setState({showScreen: 'stage'});
  }

  stageUp = () => {
    this.props.stageUp();
    this.setState({showScreen: 'stage'});
  }

  lockStage = stage => {
    this.setState({showScreen: 'question'});
    this.props.lockStage(stage);
  }

  showQuestion = () => {
    this.setState({showScreen: 'question'})
  }

  addAnswer = type => {
    const stage = this.props.stage;
    const existingStageScoreboard = this.state.scoreboard[stage] || {};
    const newStageScoreboard = {...existingStageScoreboard , [type]: (existingStageScoreboard[type] || 0) + 1};
    this.setState({scoreboard: {...this.state.scoreboard, [stage]: newStageScoreboard}});
  }

  render() {
    return (
      <div>
        {
          this.state.showScreen==='stage' &&
            <ShowStage lockStage={this.lockStage} handleShowQuestion={this.showQuestion} handleEndGame={this.props.handleEndGame}
                       stage={this.props.stage} scoreboard={this.state.scoreboard} />
        }
        {
          this.state.showScreen==='question' && <>
            <Question isLocked={this.props.isLocked} handleStageUp={this.stageUp} stage={this.props.stage} decidedGroups={this.props.decidedGroups}
                      addAnswer={this.addAnswer} scoreboard={this.state.scoreboard} />
          </>
        }
      </div>
    );
  }
}

export default Game;
