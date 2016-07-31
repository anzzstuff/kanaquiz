import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import { arrayContains, shuffle } from '../../data/helperFuncs';
import './Question.scss';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousQuestion: {},
            currentQuestion: ''
        }
    }

    // getQuestionIndex(question) {
    //     return this.state.selectedGroups.indexOf(question);
    // }

    // removeSelect(groupName) {
    //     if(this.getQuestionIndex(groupName)<0) return;
    //     let newSelectedGroups = this.state.selectedGroups.slice();
    //     newSelectedGroups.splice(this.getIndex(groupName), 1);
    //     this.setState({selectedGroups: newSelectedGroups});
    // }

    getRandomKanas(amount) {
        let randomizedKanas = [];
        if(this.state.previousQuestion.length > 0)
            removeFromAskable(this.state.previousQuestion);
        shuffle(this.askableCharacterKeys);
        for(let i = 0; i < amount; i++) {
            randomizedKanas.push(this.askableCharacterKeys[i]);
        }
        return randomizedKanas;
        // console.log(this.askableCharacters);
        //return this.askableCharacterKeys[Math.floor(Math.random() * this.askableCharacterKeys.length)];
    }

    removeFromAskable(question) {
        console.log('here');
        //console.log(this.getQuestionIndex(question));
    }

    setNewQuestion() {
        let question = this.getRandomKanas(1);
        this.setState({currentQuestion: question[0]});
        //console.log(question);
    }

    setAllowedAnswers() {

    }

    initializeCharacters() {
        this.askableCharacters = {};
        this.askableCharacterKeys = [];
        Object.keys(kanaDictionary).map(function(whichKana) {
            // console.log(whichKana); // 'hiragana' or 'katakana'
            Object.keys(kanaDictionary[whichKana]).map(function(groupName) {
                // console.log(groupName); // 'h_group1', ...
                // do we want to include this group?
                if(arrayContains(groupName, this.props.decidedGroups)) { 
                    // let's merge the group to our askableCharacters
                    this.askableCharacters = Object.assign(this.askableCharacters, kanaDictionary[whichKana][groupName]['characters']);
                   
                    Object.keys(kanaDictionary[whichKana][groupName]['characters']).map(function(key) {
                        // let's add all askable kana keys to array
                        this.askableCharacterKeys.push(key); 
                        kanaDictionary[whichKana][groupName]['characters'][key].map(function(romaji) {
                            console.log(romaji);
                        }, this);
                    }, this);
                }
            }, this);
        }, this);
        // console.log(this.askableCharacters);
    }



    componentWillMount() {
    }

    componentDidMount() {
        this.initializeCharacters();
        this.setNewQuestion();
        this.setAnswerOptions();
        this.setAllowedAnswers();
    }

    render() {
        return (
            <div className="text-center question">
                <div className="big-character">{this.state.currentQuestion}</div>

            </div>
        );
    }

}

export default Question;