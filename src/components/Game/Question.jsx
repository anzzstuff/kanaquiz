import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import { findRomajisAtKanaKey, removeFromArray, arrayContains, shuffle } from '../../data/helperFuncs';
import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousQuestion: [],
            previousAnswer: '',
            currentQuestion: [],
            answerOptions: []
        }
        this.setNewQuestion = this.setNewQuestion.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    getRandomKanas(amount, include, exclude) {
        // console.log(this.askableKanaKeys);
        let randomizedKanas = this.askableKanaKeys.slice();
        // console.log(randomizedKanas);
        if(exclude && exclude.length > 0) randomizedKanas = removeFromArray(exclude, randomizedKanas);
        if(include && include.length > 0) {
            randomizedKanas = removeFromArray(include, randomizedKanas);
            // console.log(randomizedKanas);
            shuffle(randomizedKanas);
            randomizedKanas = randomizedKanas.slice(0, amount-1);
            randomizedKanas.push(include);
            shuffle(randomizedKanas);
        }
        else {
            shuffle(randomizedKanas);
            randomizedKanas = randomizedKanas.slice(0, amount);
        }
        return randomizedKanas;
        //return this.askableKanaKeys[Math.floor(Math.random() * this.askableKanaKeys.length)];
    }

    setNewQuestion() {
        this.currentQuestion = this.getRandomKanas(1, false, this.previousQuestion);
        this.setState({currentQuestion: this.currentQuestion});
        this.setAnswerOptions();
        this.setAllowedAnswers();
        // console.log(this.currentQuestion);
    }

    setAnswerOptions() {
        this.answerOptions = this.getRandomKanas(3, this.currentQuestion[0], false);
        this.setState({answerOptions: this.answerOptions});
        // console.log(this.answerOptions);
    }

    setAllowedAnswers() {
        if(this.props.stage==1) this.allowedAnswers = findRomajisAtKanaKey(this.currentQuestion);
        if(this.props.stage==2) this.allowedAnswers = this.currentQuestion;
        // console.log("allowed answers: "+this.allowedAnswers);
    }

    handleAnswer(answer) {
        if(this.props.stage<=2) document.activeElement.blur(); // reset answer button's :active
        this.previousQuestion = this.currentQuestion;
        this.setState({previousQuestion: this.previousQuestion});
        this.previousAnswer = answer;
        this.setState({previousAnswer: this.previousAnswer});
        this.previousAllowedAnswers = this.allowedAnswers;
        this.setNewQuestion();
    }

    initializeCharacters() {
        this.askableKanas = {};
        this.askableKanaKeys = [];
        this.askableRomajis = [];
        this.previousQuestion = '';
        this.previousAnswer = '';
        Object.keys(kanaDictionary).map(function(whichKana) {
            // console.log(whichKana); // 'hiragana' or 'katakana'
            Object.keys(kanaDictionary[whichKana]).map(function(groupName) {
                // console.log(groupName); // 'h_group1', ...
                // do we want to include this group?
                if(arrayContains(groupName, this.props.decidedGroups)) {
                    // let's merge the group to our askableKanas
                    this.askableKanas = Object.assign(this.askableKanas, kanaDictionary[whichKana][groupName]['characters']);
                    Object.keys(kanaDictionary[whichKana][groupName]['characters']).map(function(key) {
                        // let's add all askable kana keys to array
                        this.askableKanaKeys.push(key);
                        this.askableRomajis.push(kanaDictionary[whichKana][groupName]['characters'][key][0]);
                    }, this);
                }
            }, this);
        }, this);
        // console.log(this.askableKanas);
    }

    getAnswerType() {
        if(this.props.stage==2) return 'kana';
            else return 'romaji';
    }

    getShowableQuestion() {
        if(this.getAnswerType()=='kana')
            return findRomajisAtKanaKey(this.state.currentQuestion)[0];
        else return this.state.currentQuestion;
    }

    getPreviousResult() {
        let resultString;
        // console.log(this.previousAnswer);
        if(this.previousQuestion=='' || this.previousAnswer=='') 
            resultString = <div className="previous-result none">Let's go! Which character is this?</div>
        else if(this.isInAllowedAnswers(this.previousAnswer))
            resultString = <div className="previous-result correct">Correct!</div>
        else
            resultString = <div className="previous-result wrong">Wrong!</div>
        
        return resultString;
    }

    isInAllowedAnswers(previousAnswer) {
        // console.log(previousAnswer);
        // console.log(this.allowedAnswers);
        if(arrayContains(previousAnswer, this.previousAllowedAnswers))
            return true;
        else return false;
    }

    componentWillMount() {
        this.initializeCharacters();
    }

    componentDidMount() {
        this.setNewQuestion();
    }

    render() {
        let btnClass = "btn btn-default answer-button";
        if ('ontouchstart' in window)
            btnClass += " no-hover"; // disables hover effect on touch screens
        return (
            <div className="text-center question col-xs-12">
                {this.getPreviousResult()}
                <div className="big-character">{this.getShowableQuestion()}</div>
                {this.state.answerOptions.map(function(answer, idx) {
                    return <AnswerButton answer={answer} 
                            className={btnClass} 
                            key={idx} 
                            answertype={this.getAnswerType()} 
                            handleAnswer={this.handleAnswer} />
                }, this)}
            </div>
        );
    }

}

class AnswerButton extends Component {
    getShowableAnswer() {
        if(this.props.answertype=='romaji')
            return findRomajisAtKanaKey(this.props.answer)[0];
        else return this.props.answer;
    }

    render() {
        return (
            <button className={this.props.className} onClick={()=>this.props.handleAnswer(this.getShowableAnswer())}>{this.getShowableAnswer()}</button>
        );
    }
}
export default Question;