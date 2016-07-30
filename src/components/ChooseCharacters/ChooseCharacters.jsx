import React, { Component } from 'react';

import './ChooseCharacters.scss';
import CharacterGroup from './CharacterGroup';
/*
let kanaArray = [
        'あ','い','う','え','お',
        'か','き','く','け','こ',
        'さ','し','す','せ','そ',
        'た','ち','つ','て','と',
        'な','に','ぬ','ね','の',
        'は','ひ','ふ','へ','ほ',
        'ま','み','む','め','も',
        'や','ゆ','よ',
        'ら','り','る','れ','ろ',
        'わ','を','ん'
];
let romajiArray = [
        'a','i','u','e','o',
        'ka','ki','ku','ke','ko',
        'sa','shi','su','se','so',
        'ta','chi','tsu','te','to',
        'na','ni','nu','ne','no',
        'ha','hi','fu','he','ho',
        'ma','mi','mu','me','mo',
        'ya','yu','yo',
        'ra','ri','ru','re','ro',
        'wa','wo','n'
];
*/
let kanaDictionary = 
{
    'hiragana' : {
        'h_group1': { characters: { 'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お' } },
        'h_group2': { characters: { 'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ' } },
        'h_group3': { characters: { 'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ' } },
        'h_group4': { characters: { 'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て' , 'to': 'と' } },
        'h_group5': { characters: { 'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の' } },
        'h_group6': { characters: { 'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ' } },
        'h_group7': { characters: { 'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も' } },
        'h_group8': { characters: { 'ya': 'や', 'yu': 'ゆ', 'yo': 'よ' } },
        'h_group9': { characters: { 'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ' } },
        'h_group10': { characters: { 'wa': 'わ', 'wo': 'を', 'n': 'ん' } }
    },
    'katakana': {}
};

let acceptedAlternatives = { 'shi': 'si', 'chi': 'ti', 'tsu': 'tu', 'fu': 'hu' };

class ChooseCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKana: ['h_group1'],
            kana : kanaDictionary
        };
        this.startGame = this.startGame.bind(this);
        this.showKanaRows = this.showKanaRows.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    getIndex(groupName) {
        return this.state.selectedKana.indexOf(groupName);
    }

    isSelected(groupName) {
        return this.getIndex(groupName) > -1 ? true : false;
    }

    removeSelect(index) {
        let newSelectedKana = this.state.selectedKana.slice();
        newSelectedKana.splice(index, 1);
        this.setState({selectedKana: newSelectedKana});
    }

    addSelect(groupName) {
        this.setState({selectedKana: this.state.selectedKana.concat(groupName)});
    }

    toggleSelect(groupName) {
        console.log('toggling '+groupName);
        let index = this.getIndex(groupName);
        if(index > -1) this.removeSelect(index);
        else this.addSelect(groupName);
    }

    showKanaRows(whichKana) {
        let thisKana = this.state.kana[whichKana];
        return Object.keys(thisKana).map(function(groupName, idx) {
            return (
                <CharacterGroup
                    key={idx}
                    groupName={groupName}
                    selected={this.isSelected(groupName)}
                    characters={thisKana[groupName].characters}
                    handleToggleSelect={this.toggleSelect}
                />
            );
        }, this);
    }

    startGame() {
        this.props.handleStartGame('foo');
    }

    render() {
        return (
            <div className="choose-characters">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-body welcome">
                                <h4>Welcome to Kana Quiz{this.props.nickName !== '' && typeof this.props.nickName !== 'undefined'?', '+this.props.nickName:''}!</h4>
                                <p>Please choose the groups of characters that you'd like to be studying.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Hiragana (ひらがな)</div>
                            <div className="panel-body selection-areas">
                                {this.showKanaRows('hiragana')}
                            </div>
                            <div className="panel-footer text-center"><a href="javascript:;">All</a> &middot; <a href="javascript:;">None</a></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Katakana (カタカナ)</div>
                            <div className="panel-body selection-areas">
                                {this.showKanaRows('katakana')}
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 text-center"><button className="btn btn-danger startgame-button" onClick={this.startGame}>Start the Quiz!</button></div>
                </div>
            </div>
        );
    }
}

export default ChooseCharacters;