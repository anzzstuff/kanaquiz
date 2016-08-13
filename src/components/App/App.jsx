import React, { Component } from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import GameContainer from '../GameContainer/GameContainer';
import Footer from '../Footer/Footer';
import { removeHash } from '../../data/helperFuncs';

const options = {};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameState: 'chooseCharacters'
        }
        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    startGame() {
        this.setState({gameState: 'game'});
    }

    endGame() {
        this.setState({gameState: 'chooseCharacters'});
    }

    render() {
        return (
            <div>
                <Navbar 
                        gameState={this.state.gameState}
                        handleEndGame={this.endGame} 
                />
                <div className="outercontainer">
                    <div className="container game">
                        <GameContainer
                                gameState={this.state.gameState}
                                handleStartGame={this.startGame} 
                                handleEndGame={this.endGame} 
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;