import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {

    constructor() {
        super()
        this.state = {
            newGame: false
        }
    }

    handleNewGame = () => {
        this.setState({newGame: !this.state.newGame})
        
    }

    render() {
        
        return (
            <div>
                <Board className="game" isNewGame={this.state.newGame} />
            </div>
        );
    }
}

export default Game;