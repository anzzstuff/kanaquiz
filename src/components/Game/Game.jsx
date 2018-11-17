import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import ShowStage from './ShowStage';
import Question from './Question';

class Game extends Component {
  state = { showScreen: '' }

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

  render() {
    return (
      <div>
        {
          this.state.showScreen==='stage' &&
            <ShowStage lockStage={this.lockStage} handleShowQuestion={this.showQuestion} handleEndGame={this.props.handleEndGame} stage={this.props.stage} />
        }
        {
          this.state.showScreen==='question' &&
            <Question isLocked={this.props.isLocked} handleStageUp={this.stageUp} stage={this.props.stage} decidedGroups={this.props.decidedGroups} />
        }
      </div>
    );
  }
}

export default Game;
