import React, { Component } from 'react';

class Square extends Component {
    
    render() {
        return (
            <input className="square" type="button" value={this.props.value} 
                    onClick={ () => this.props.onClick() }
            />
        );
    }
}

export default Square;