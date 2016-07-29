import React, { Component } from 'react';

class CharacterRow extends Component {
    render() {
        let strCharacters = '';
        this.props.characters.map(function(items) {
            Object.keys(items).map(function(item) {
                if(item!='selected') strCharacters+=item+', ';
            }); 
        });
        strCharacters = strCharacters.slice(0, -2);

        let chooseRow = (
            <div className="choose-row">
                <span className={this.props.selected ? 
                    'glyphicon glyphicon-small glyphicon-check' :
                    'glyphicon glyphicon-small glyphicon-unchecked'}></span> {strCharacters}
            </div>
        );

        return (
            <div>
                {chooseRow}
            </div>
        );
    }
}

export default CharacterRow;