import React, { Component } from 'react';

class CharacterGroup extends Component {
    render() {
        let strRomajiCharacters = '';
        Object.keys(this.props.characters).map(function(character) {
            strRomajiCharacters+=character+' · ';
        });
        strRomajiCharacters = strRomajiCharacters.slice(0, -2);

        let chooseRow = (
            <div className="choose-row"
                onClick={()=>this.props.handleToggleSelect(this.props.groupName)}>
                <span className={this.props.selected ?
                    'glyphicon glyphicon-small glyphicon-check' :
                    'glyphicon glyphicon-small glyphicon-unchecked'}></span> {strRomajiCharacters}
                <span className="pull-right success-percent">0 %</span>
            </div>
        );

        return (
            <div>
                {chooseRow}
            </div>
        );
    }
}

export default CharacterGroup;