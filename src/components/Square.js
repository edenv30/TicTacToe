import React, { Component } from 'react';

class Square extends Component {
    
    render() {
        return (
            <input className={this.props.isWinning ? "square--winning" : "square"} 
                    type="button" value={this.props.value} 
                    onClick={ () => this.props.onClick() }
            />
        );
    }
}

export default Square;