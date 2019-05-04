import React, { Component } from 'react'

class EndGame extends Component {
    restartGame = () => {
        this.props.restartGame()
    }
    render() {
        return (
            <div>
                {this.props.userWon 
                ? 
                <span>CONGRATULATIONS ! you guessed the word! </span> 
                : 
                <span> =( better luck next time!</span>}
                <button onClick={this.restartGame}>New game!</button>
            </div>
        )
    }
}

export default EndGame