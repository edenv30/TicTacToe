import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <input  className="square"
                    id={this.props.isWinning ? "square--winning" : null }
                    type="button" value={this.props.value} 
                    onClick={ () => this.props.onClick() }
            />
        );
    }
}

export default Square;