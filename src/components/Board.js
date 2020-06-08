import React, { Component } from 'react';
import Line from './Line';
import util from './utils';

import Confetti from 'react-confetti'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numSteps: 0,
            history: [ {squares: Array(9).fill(null)} ],
            squares1: Array(9).fill(null),
            isXturn: true,
           
        }
    }

    getData = (updateSquares, turn) => {
        const history = this.state.history.slice(0, this.state.numSteps + 1);
        const currentSquares = history[history.length - 1];
        let squares = currentSquares.squares.slice();
        squares = updateSquares;
        this.setState({squares1: updateSquares,
                    history: history.concat({
                            squares: squares
                    }),
                    numSteps: history.length,
                    isXturn: turn ,
                    
        })
    }

    getConfetti = () => {
        const confetti = <Confetti
                    drawShape={ctx => {
                        ctx.beginPath()
                        for(let i = 0; i < 22; i++) {
                        const angle = 0.35 * i
                        const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                        const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                        ctx.lineTo(x, y)
                        }
                        ctx.stroke()
                        ctx.closePath()
                    }}
                    
            />
        return confetti;
    }

    jumpToStep = (numStep) => {
        this.setState({
            numSteps: numStep,
            isXturn: (numStep%2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const currentSquares = history[this.state.numSteps];
        const winner = util.calcWinner(currentSquares.squares);
        let statusPlayer;
        let confettiShow;
        if(winner) {
            statusPlayer = `The Winner is  player ${winner.player}`;
            confettiShow = this.getConfetti();
        }
        else {
            statusPlayer = `Turn of Player ${this.state.isXturn ? 'X' : 'O'}`;
        }

        let steps = history.map (  (step, numStep) => {
            const btnValue = numStep ? `Back to step ${numStep}` : 'Start Over';
            return(
                <li key={numStep}>
                    <input type="button" value={btnValue} onClick={ () => this.jumpToStep(numStep) } />
                </li>
            )
        } )

        return (
            <div className="game-wrap">
                <div className="status">{statusPlayer}</div>
                {confettiShow}
                <div className="game-board">
                    <Line one={0} two={1} three={2} squares={currentSquares.squares} turn={this.state.isXturn} callback={ (updateSquares, turn) => this.getData(updateSquares, turn)} squaresWin={winner ? winner.squaresWin: []} /> 
                    <Line one={3} two={4} three={5} squares={currentSquares.squares} turn={this.state.isXturn} callback={ (updateSquares, turn) => this.getData(updateSquares, turn)} squaresWin={winner ? winner.squaresWin: []} /> 
                    <Line one={6} two={7} three={8} squares={currentSquares.squares} turn={this.state.isXturn} callback={ (updateSquares, turn) => this.getData(updateSquares, turn)} squaresWin={winner ? winner.squaresWin: []} /> 
                </div>
                <div className="game-info">
                    <ul>{steps}</ul>
                </div>
            </div>
        );
    }
}

export default Board;