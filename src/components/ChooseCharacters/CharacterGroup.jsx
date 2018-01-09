import React, { Component } from 'react';

class CharacterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shownChars : '',
        }
        this.changeShownChars = this.changeShownChars.bind(this);
    }

    changeShownChars(newString, e) {
        this.setState({shownChars: newString})
    }

    getShowableCharacters(whichKana) {
        let strRomajiCharacters = '';
        let strKanaCharacters = '';
        Object.keys(this.props.characters).map(function(character) {
            strRomajiCharacters+=this.props.characters[character][0]+' · ';
            strKanaCharacters+=character+' · ';
        }, this);
        strRomajiCharacters = strRomajiCharacters.slice(0, -2);
        strKanaCharacters = strKanaCharacters.slice(0, -2);
        if(whichKana=='romaji') return strRomajiCharacters;
        else return strKanaCharacters;
    }

    componentWillMount() {
        this.changeShownChars(this.getShowableCharacters('romaji'));
    }

    render() {
        return (
            <div className="choose-row"
                onClick={()=>{
                    this.props.handleToggleSelect(this.props.groupName);
                    this.changeShownChars(this.getShowableCharacters('romaji'));
                }}
                onMouseDown={()=>this.changeShownChars(this.getShowableCharacters('kana'))}
                onMouseOut={()=>this.changeShownChars(this.getShowableCharacters('romaji'))}
                onTouchStart={()=>this.changeShownChars(this.getShowableCharacters('kana'))}
                onTouchEnd={()=>this.changeShownChars(this.getShowableCharacters('romaji'))}
                >
                <span className={this.props.selected ?
                    'glyphicon glyphicon-small glyphicon-check' :
                    'glyphicon glyphicon-small glyphicon-unchecked'}></span> {this.state.shownChars}
            </div>
        );
    }
}

export default CharacterGroup;