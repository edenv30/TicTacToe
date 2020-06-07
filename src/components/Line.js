import React, { Component } from 'react';
import Square from './Square';
import util from './utils';

class Line extends Component {

    renderSquare = (i) => {
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={ () => this.handleClick(i) }
            />
        );
    }

    handleClick = (i) => {
        const squares = this.props.squares.slice();
        if(util.calcWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.props.turn ? 'X' : 'O' ;
        this.props.callback(squares, !this.props.turn);
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(this.props.one)}
                    {this.renderSquare(this.props.two)}
                    {this.renderSquare(this.props.three)}
                </div>
            </div>
        );
    }
}

export default Line;