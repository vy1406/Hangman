import React, { Component } from 'react'

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }
    render() {
        return (
            this.props.isSelected ? 
            <span onClick={this.selectLetter} className="selected">{this.props.letter} </span> 
            : 
            <span onClick={this.selectLetter}>{this.props.letter} </span>
        )
    }
}

export default Letter