import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: {},
      solution: {
        word: "IBRAHIMOVIC",
        hint: "The only player that can score 2 goals with 1 kick"
      },
      score: 100
    }
    this.state.letterStatus = this.generateLetterStatuses()
    // this.state.letterStatus = this.getArrayForTesting()
  }
  getArrayForTesting() {
    return {
      A: true,
      B: true,
      C: false,
      D: false,
      E: false,
      F: false,
      G: false,
      H: false,
      I: false,
      J: false,
      K: false,
      L: false,
      M: true,
      N: false,
      O: false,
      P: false,
      Q: false,
      R: false,
      S: false,
      T: false,
      U: false,
      V: true,
      W: false,
      X: false,
      Y: false,
      Z: false
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  checkIfLetterInSolution = letter => {
    let arrSolutionLetters = this.state.solution.word.split("")
    for (let i = 0; i < arrSolutionLetters.length; i++)
      if (arrSolutionLetters[i] === letter)
        return true
    return false
  }

  updateScore = () => {
    this.setState({
      score: this.state.score - 10
    }, this.updateClass)
  }
  checkIfFirstTimeClicked = letter => {
    let arrKeys = this.state.letterStatus
    if (arrKeys[letter])
      return false
    return true
  }
  selectLetter = letter => {
    let arrKeys = this.state.letterStatus
    arrKeys[letter] = true
    this.setState({
      letterStatus: arrKeys
    })
    if (!this.checkIfLetterInSolution(letter))
      this.updateScore()

  }
  isWordGuessed = () => {
    let arrSolutionLetters = this.state.solution.word.split("")
    for (let i = 0; i < arrSolutionLetters.length; i++)
      if (this.state.letterStatus[arrSolutionLetters[i]] === false)
        return false
    return true
  }
  restartGame = () => {
    this.setState({
      score : 100,
      letterStatus : this.generateLetterStatuses()
    })
  }
  endGame = () => {

    if (this.isWordGuessed())
      return <EndGame restartGame={this.restartGame} userWon={true} />
    else if (this.state.score === 0){
      return <EndGame restartGame={this.restartGame} userWon={false} />
    }
    else return ""

  }
 
  render() {
    return (
      <div>
        <Solution solution={this.state.solution} letters={this.state.letterStatus} />
        <Score score={this.state.score} />
        <Letters letters={this.state.letterStatus} selectLetter={this.selectLetter} />
        {this.endGame()}
      </div >
    )
  }
}

export default App;
