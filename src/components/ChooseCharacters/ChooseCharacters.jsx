import React, { Component } from 'react';
import { kanaDictionary } from '../../data/kanaDictionary';
import './ChooseCharacters.scss';
import CharacterGroup from './CharacterGroup';

class ChooseCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg : '',
            selectedKana: ['h_group1']
        }
        this.startGame = this.startGame.bind(this);
        this.showKanaRows = this.showKanaRows.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.selectNone = this.selectNone.bind(this);
    }

    getIndex(groupName) {
        return this.state.selectedKana.indexOf(groupName);
    }

    isSelected(groupName) {
        return this.getIndex(groupName) > -1 ? true : false;
    }

    removeSelect(groupName) {
        if(this.getIndex(groupName)<0) return;
        let newSelectedKana = this.state.selectedKana.slice();
        newSelectedKana.splice(this.getIndex(groupName), 1);
        this.setState({selectedKana: newSelectedKana});
    }

    addSelect(groupName) {
        this.setState({errMsg: '', selectedKana: this.state.selectedKana.concat(groupName)});
    }

    toggleSelect(groupName) {
        if(this.getIndex(groupName) > -1) this.removeSelect(groupName);
        else this.addSelect(groupName);
    }

    selectAll(whichKana) {
        let thisKana = kanaDictionary[whichKana];
        let newSelectedKana = this.state.selectedKana.slice();
        Object.keys(thisKana).map(function(groupName) {
            if(!this.isSelected(groupName))
                newSelectedKana.push(groupName);
        }, this);
        this.setState({errMsg: '', selectedKana: newSelectedKana});
    }

    selectNone(whichKana) {
        let newSelectedKana = [];
        this.state.selectedKana.map(function(groupName) {
            let mustBeRemoved = false;
            Object.keys(kanaDictionary[whichKana]).map(function(removableGroupName) {
                if(removableGroupName===groupName)
                    mustBeRemoved = true;
            }, this);
            if(!mustBeRemoved)
                newSelectedKana.push(groupName);
        }, this);
        this.setState({selectedKana: newSelectedKana});
    }

    showKanaRows(whichKana) {
        let thisKana = kanaDictionary[whichKana];
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
        if(this.state.selectedKana.length < 1) {
            this.setState({ errMsg: 'Choose at least one group!'});
            return;
        }
        this.props.handleStartGame(this.state.selectedKana);
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
                            <div className="panel-heading">Hiragana <span className="pull-right">ひらがな</span></div>
                            <div className="panel-body selection-areas">
                                {this.showKanaRows('hiragana')}
                            </div>
                            <div className="panel-footer text-center">
                                <a href="javascript:;" onClick={()=>this.selectAll('hiragana')}>All</a> &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectNone('hiragana')}>None</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Katakana <span className="pull-right">カタカナ</span></div>
                            <div className="panel-body selection-areas">
                                {this.showKanaRows('katakana')}
                            </div>
                            <div className="panel-footer text-center">
                                <a href="javascript:;" onClick={()=>this.selectAll('katakana')}>All</a> &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectNone('katakana')}>None</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 text-center">
                        {this.state.errMsg!=''?(<div className="error-message">{this.state.errMsg}</div>):''}
                        <button className="btn btn-danger startgame-button" onClick={this.startGame}>Start the Quiz!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseCharacters;