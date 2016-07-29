import React, { Component } from 'react';
import './ChooseCharacters.scss';
import CharacterRow from './CharacterRow';

let kanaArray = [
        "あ","い","う","え","お",
        "か","き","く","け","こ",
        "さ","し","す","せ","そ",
        "た","ち","つ","て","と",
        "な","に","ぬ","ね","の",
        "は","ひ","ふ","へ","ほ",
        "ま","み","む","め","も",
        "や","ゆ","よ",
        "ら","り","る","れ","ろ",
        "わ","を","ん"
];
let romajiArray = [
        "a","i","u","e","o",
        "ka","ki","ku","ke","ko",
        "sa","shi","su","se","so",
        "ta","chi","tsu","te","to",
        "na","ni","nu","ne","no",
        "ha","hi","fu","he","ho",
        "ma","mi","mu","me","mo",
        "ya","yu","yo",
        "ra","ri","ru","re","ro",
        "wa","wo","n"
];

/*let hiraganaItems = {
    group1: { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' },
    group2: { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' }
}*/

class ChooseCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hiraganaItems: [
                {
                    group1: [
                        { selected: true, a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' }
                    ],
                    group2: [
                        { selected: false, ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' }
                    ]
                }
            ]
        }
        this.startGame = this.startGame.bind(this);
        this.toggleGroup = this.toggleGroup.bind(this);
        this.showHiraganaRows = this.showHiraganaRows.bind(this);
    }

    showHiraganaRows() {
        return (this.state.hiraganaItems.map(function(groups) {
            return Object.keys(groups).map(function(group) {
                return groups[group].map(function(item) {
                    return <CharacterRow characters={groups[group]} selected={item.selected} />
                });
            });
        }))
    }

    toggleGroup(e) {
        console.log('event: '+e);
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
                                {this.showHiraganaRows()}
                            </div>
                            <div className="panel-footer text-center"><a href="javascript:;">All</a> &middot; <a href="javascript:;">None</a></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Katakana (カタカナ)</div>
                        </div>                
                    </div>                
                    <div className="col-xs-12 text-center"><button className="btn btn-danger startgame-button" onClick={this.startGame}>Start the Quiz!</button></div>
                </div>
            </div>
        )
    }
}

export default ChooseCharacters;