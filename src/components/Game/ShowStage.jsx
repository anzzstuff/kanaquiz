import React, { Component } from 'react';
import './ShowStage.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ShowStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stageContent: ''
        }
        this.showStage = this.showStage.bind(this);
        this.removeStage = this.removeStage.bind(this);
    }

    removeStage() {
        this.setState({stageContent: ''});
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(this.props.handleShowQuestion, 1000) // how soon we go to question (1000)
    }

    showStage() {
        let stageDescription;
        let stageSecondaryDescription = false;
        if(this.props.stage===1) stageDescription = 'Choose one';
        if(this.props.stage===2) { stageDescription = 'Choose one'; stageSecondaryDescription = 'Reverse'; }
        if(this.props.stage===3) stageDescription = 'Write the answer';
        if(this.props.stage===4) { stageDescription = 'Write the answer'; stageSecondaryDescription = 'Three at once'; }
        let stageContent = (<div className="text-center show-stage">
                <h1>Stage {this.props.stage}</h1>
                <h3>{stageDescription}</h3>
                {stageSecondaryDescription?<h4>{stageSecondaryDescription}</h4>:''}
            </div>);

        if(this.props.stage===5) {
            stageContent = (<div className="text-center show-end">
                <h1>Congratulations!</h1>
                <h3>You have passed all 4 stages.</h3>
                <h4>Would you like to keep playing or go back to menu?</h4>
                <p><button className="btn btn-danger keep-playing" onClick={()=>this.props.lockStage(4)}>Keep playing</button></p>
                <p><button className="btn btn-danger back-to-menu" onClick={this.props.handleEndGame}>Back to menu</button></p>
            </div>)
        }
        this.setState({stageContent: stageContent});
    }

    componentDidMount() {
        if(this.props.stage<=4)
            this.timeoutID = setTimeout(this.removeStage, 1500); // how soon we start fading out (1500)
        this.showStage();
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutID);
    }

    render() {
        return (
            <ReactCSSTransitionGroup transitionName="stage" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {this.state.stageContent}
            </ReactCSSTransitionGroup>
        );
    }
}

export default ShowStage;