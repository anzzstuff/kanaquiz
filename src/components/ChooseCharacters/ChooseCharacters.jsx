import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import { kanaDictionary } from '../../data/kanaDictionary';
import './ChooseCharacters.scss';
import CharacterGroup from './CharacterGroup';

class ChooseCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg : '',
            selectedGroups: this.props.selectedGroups,
            showAlternatives: []
        }
        this.toggleSelect = this.toggleSelect.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    getIndex(groupName) {
        return this.state.selectedGroups.indexOf(groupName);
    }

    isSelected(groupName) {
        return this.getIndex(groupName) > -1 ? true : false;
    }

    removeSelect(groupName) {
        if(this.getIndex(groupName)<0)
            return;
        let newSelectedGroups = this.state.selectedGroups.slice();
        newSelectedGroups.splice(this.getIndex(groupName), 1);
        this.setState({selectedGroups: newSelectedGroups});
    }

    addSelect(groupName) {
        this.setState({errMsg: '', selectedGroups: this.state.selectedGroups.concat(groupName)});
    }

    toggleSelect(groupName) {
        if(this.getIndex(groupName) > -1)
            this.removeSelect(groupName);
        else
            this.addSelect(groupName);
    }

    selectAll(whichKana, altOnly=false, similarOnly=false) {
        const thisKana = kanaDictionary[whichKana];
        let newSelectedGroups = this.state.selectedGroups.slice();
        Object.keys(thisKana).forEach(groupName => {
            if(!this.isSelected(groupName) && (
                (altOnly && groupName.endsWith('_a')) ||
                (similarOnly && groupName.endsWith('_s')) ||
                (!altOnly && !similarOnly)
            ))
                newSelectedGroups.push(groupName);
        });
        this.setState({errMsg: '', selectedGroups: newSelectedGroups});
    }

    selectNone(whichKana, altOnly=false, similarOnly=false) {
        let newSelectedGroups = [];
        this.state.selectedGroups.forEach(groupName => {
            let mustBeRemoved = false;
            Object.keys(kanaDictionary[whichKana]).forEach(removableGroupName => {
                if(removableGroupName === groupName && (
                    (altOnly && groupName.endsWith('_a')) ||
                    (similarOnly && groupName.endsWith('_s')) ||
                    (!altOnly && !similarOnly)
                ))
                    mustBeRemoved = true;
            });
            if(!mustBeRemoved)
                newSelectedGroups.push(groupName);
        });
        this.setState({selectedGroups: newSelectedGroups});
    }

    toggleAlternative(whichKana) {
        const idx = this.state.showAlternatives.indexOf(whichKana);
        let newShowAlternatives = this.state.showAlternatives;
        if(idx >= 0)
            newShowAlternatives.splice(idx, 1);
        else
            newShowAlternatives.push(whichKana)
        this.setState({showAlternatives: newShowAlternatives});
    }

    getSelectedAlternatives(whichKana) {
        return this.state.selectedGroups.filter(groupName => {
            return groupName.startsWith(whichKana == 'hiragana' ? 'h_' : 'k_') &&
                groupName.endsWith('_a');
        }).length;
    }

    getAmountOfAlternatives(whichKana) {
        return Object.keys(kanaDictionary[whichKana]).filter(groupName => {
            return groupName.endsWith("_a");
        }).length;
    }

    alternativeToggleRow(whichKana, showAlternatives) {
        let checkBtn = "glyphicon glyphicon-small glyphicon-"
        let status;
        if(this.getSelectedAlternatives(whichKana) >= this.getAmountOfAlternatives(whichKana))
            status = 'check';
        else if(this.getSelectedAlternatives(whichKana) > 0)
            status = 'check half';
        else
            status = 'unchecked'
        checkBtn += status

        return <div
            key={'alt_toggle_' + whichKana}
            onClick={() => this.toggleAlternative(whichKana)}
            className="choose-row"
        >
            <span
                className={checkBtn}
                onClick={ e => {
                    if(status == 'check')
                        this.selectNone(whichKana, true);
                    else if(status == 'check half' || status == 'unchecked')
                        this.selectAll(whichKana, true);
                    e.stopPropagation();
                }}
            ></span>
            {
                showAlternatives ? <span className="toggle-caret">&#9650;</span>
                : <span className="toggle-caret">&#9660;</span>
            }
            Alternative characters (ga · ba · kya..)
        </div>
    }

    showGroupRows(whichKana, showAlternatives) {
        const thisKana = kanaDictionary[whichKana];
        let rows = [];
        Object.keys(thisKana).forEach((groupName, idx) => {
            if(groupName.endsWith("group11_a"))
                rows.push(this.alternativeToggleRow(whichKana, showAlternatives));

            if(!groupName.endsWith("a") || showAlternatives) {
                rows.push(<CharacterGroup
                    key={idx}
                    groupName={groupName}
                    selected={this.isSelected(groupName)}
                    characters={thisKana[groupName].characters}
                    handleToggleSelect={this.toggleSelect}
                />);
            }
        });

        return rows;
    }

    startGame() {
        if(this.state.selectedGroups.length < 1) {
            this.setState({ errMsg: 'Choose at least one group!'});
            return;
        }
        this.props.handleStartGame(this.state.selectedGroups);
    }

    render() {
        return (
            <div className="choose-characters">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-body welcome">
                                <h4>Welcome to Kana Quiz!</h4>
                                <p>Please choose the groups of characters that you'd like to be studying.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Hiragana · ひらがな</div>
                            <div className="panel-body selection-areas">
                                {this.showGroupRows('hiragana', this.state.showAlternatives.indexOf('hiragana') >= 0)}
                            </div>
                            <div className="panel-footer text-center">
                                <a href="javascript:;" onClick={()=>this.selectAll('hiragana')}>All</a> &nbsp;&middot;&nbsp; <a href="javascript:;"
                                    onClick={()=>this.selectNone('hiragana')}>None</a>
                                &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectAll('hiragana', true)}>All alternative</a>
                                &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectNone('hiragana', true)}>No alternative</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Katakana · カタカナ</div>
                            <div className="panel-body selection-areas">
                                {this.showGroupRows('katakana', this.state.showAlternatives.indexOf('katakana') >= 0)}
                            </div>
                            <div className="panel-footer text-center">
                                <a href="javascript:;" onClick={()=>this.selectAll('katakana')}>All</a> &nbsp;&middot;&nbsp; <a href="javascript:;"
                                    onClick={()=>this.selectNone('katakana')}>None
                                </a>
                                &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectAll('katakana', true)}>All alternative</a>
                                &nbsp;&middot;&nbsp; <a href="javascript:;" onClick={()=>this.selectNone('katakana', true)}>No alternative</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-12 pull-right">
                        <span className="pull-right lock">Lock to stage &nbsp;
                            {
                                this.props.isLocked &&
                                    <input className="stage-choice" type="number" min="1" max="4" maxLength="1" size="1"
                                        onChange={(e)=>this.props.lockStage(e.target.value, true)}
                                        value={this.props.stage}
                                    />
                            }
                        <Switch onClick={()=>this.props.lockStage(1)} on={this.props.isLocked} /></span>
                    </div>
                    <div className="col-sm-offset-3 col-sm-6 col-xs-12 text-center">
                        {
                            this.state.errMsg != '' &&
                                <div className="error-message">{this.state.errMsg}</div>
                        }
                        <button className="btn btn-danger startgame-button" onClick={this.startGame}>Start the Quiz!</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseCharacters;
