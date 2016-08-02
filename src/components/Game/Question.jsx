import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import { removeFromArray, arrayContains, shuffle } from '../../data/helperFuncs';
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
            randomizedKanas = randomizedKanas.slice(0,amount-1);
            randomizedKanas.push(include);
            shuffle(randomizedKanas);
        }
        else {
            shuffle(randomizedKanas);
            randomizedKanas = randomizedKanas.slice(0,amount);
        }
        return randomizedKanas;
        //return this.askableKanaKeys[Math.floor(Math.random() * this.askableKanaKeys.length)];
    }

    setPreviousQuestion() {
        // console.log("settings previous");
        this.previousQuestion = this.currentQuestion;
        this.setState({previousQuestion: this.previousQuestion});
    }

    setNewQuestion() {
        if(this.props.stage<=2) document.activeElement.blur(); // reset answer button's :active
        if(this.currentQuestion) this.setPreviousQuestion();
        this.currentQuestion = this.getRandomKanas(1,false,this.previousQuestion);
        this.setState({currentQuestion: this.currentQuestion});
        this.setAnswerOptions();
        this.setAllowedAnswers();
        // console.log(this.currentQuestion);
    }

    setAnswerOptions() {
        this.answerOptions = this.getRandomKanas(3,this.currentQuestion[0],false);
        this.setState({answerOptions: this.answerOptions});
        // console.log(this.answerOptions);
    }

    setAllowedAnswers() {

    }

    initializeCharacters() {
        this.askableKanas = {};
        this.askableKanaKeys = [];
        this.askableRomajis = [];
        this.previousQuestion = '';
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
                        // console.log(kanaDictionary[whichKana][groupName]['characters'][key][0]);
                        // kanaDictionary[whichKana][groupName]['characters'][key].map(function(romaji) {
                        //     console.log(romaji);
                        // }, this);
                    }, this);
                }
            }, this);
        }, this);
        // console.log(this.askableKanas);
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
            <div className="text-center question">
                <div className="big-character">{this.state.currentQuestion}</div>
                {this.state.answerOptions.map(function(answer, idx) {
                    return <AnswerButton answer={answer} className={btnClass} key={idx} onClick={this.setNewQuestion} />;
                }, this)}
            </div>
        );
    }

}

class AnswerButton extends Component {
    render() {
        return (
            <button className={this.props.className}>{this.props.answer}</button>;
        )
    }
}
export default Question;