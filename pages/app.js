import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'

class App extends Component {
  constructor () {
    super()

    this.computerPlay = this.computerPlay.bind(this)
    this.setOutcome = this.setOutcome.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.gameHandler = this.gameHandler.bind(this)
    this.setTieState = this.setTieState.bind(this)
    this.setCompWinState = this.setCompWinState.bind(this)
    this.setHumanWinState = this.setHumanWinState.bind(this)
    this.showRoundWinner = this.showRoundWinner.bind(this)
    this.showSetWinner = this.showSetWinner.bind(this)
    this.initialState = {
      computerChoice: null,
      humanChoice: null,
      totalGames: 0,
      computerCount: 0,
      humanCount: 0,
      roundWinner: null,
      ties: 0
    }

    this.state = this.initialState
  }
  resetHandler () {
    this.setState(this.initialState)
  }

  // This function makes a random selection for the computer.
  computerPlay () {
    const computerSelection = (Math.floor(Math.random() * 3))
    switch (computerSelection) {
      case 0:
        return 'paper'
      case 1:
        return 'rock'
      case 2:
        return 'scissors'
      default:
    }
  }

  // This helper function categorising all the possible outccomes into three categories.
  setOutcome (computerChoice, humanChoice) {
    if (computerChoice === humanChoice && computerChoice !== null) {
      console.log('a tie')
      return 'A Tie'
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      return 'Computer Wins'
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      return 'Computer Wins'
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      return 'Computer Wins'
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
      return 'You Win'
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
      return 'You Win'
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
      return 'You Win'
    }
  }

  // This function will set State based on a tie game.
  setTieState (computerChoice, humanChoice) {
    this.setState((prevState) => ({
      ...prevState,
      computerChoice,
      humanChoice,
      ties: prevState.ties + 1,
      totalGames: prevState.totalGames + 1,
      roundWinner: 'A Tie'
    }))
  }
  // This function will set state based on a win by the computer.
  setCompWinState (computerChoice, humanChoice) {
    this.setState((prevState) => ({
      ...prevState,
      computerChoice,
      humanChoice,
      computerCount: prevState.computerCount + 1,
      totalGames: prevState.totalGames + 1,
      roundWinner: 'Computer Won'
    }))
  }

  // This function will set state based on a win by the player.
  setHumanWinState (computerChoice, humanChoice) {
    this.setState((prevState) => ({
      ...prevState,
      computerChoice,
      humanChoice,
      humanCount: prevState.humanCount + 1,
      totalGames: prevState.totalGames + 1,
      roundWinner: 'You Won'
    }))
  }

  // This function puts it all together. It calls our helper functions and ultimately sets state
  gameHandler (humanChoice) {
    const computerChoice = this.computerPlay()
    const winner = this.setOutcome(computerChoice, humanChoice)
    switch (winner) {
      case 'A Tie':
        this.setTieState(computerChoice, humanChoice)
        break
      case 'Computer Wins':
        this.setCompWinState(computerChoice, humanChoice)
        break
      case 'You Win':
        this.setHumanWinState(computerChoice, humanChoice)
        break
      default:
        return winner
    }
  }

  // This function reads the round winner from state and renders it to the DOM.
  showRoundWinner () {
    const {roundWinner, totalGames} = this.state
    if (totalGames < 5) {
      return (
        <div>
          {roundWinner}
        </div>
      )
    }
  }
  showSetWinner () {
    const { totalGames, computerChoice, humanChoice } = this.state
    const outcome = this.setOutcome(computerChoice, humanChoice)
    if (totalGames === 5 && outcome === 'A Tie') {
      return 'Congratulations. You Won the SET of 5 games'
    } else if (totalGames === 5 && outcome === 'You Win') {
      return 'Congratulations. You Won the SET of 5 games'
    } else if (totalGames === 5 && outcome === 'Computer Wins') {
      return 'Computer won this set of 5 games'
    }
  }

  // This function resets state to its initial starting value.
  actions () {
    if (this.state.totalGames < 5) {
      return (
        <div>
          <button className='btn-scissors' onClick={() => { this.gameHandler('scissors') }}>SCISSORS</button>
          <button className='btn-paper' onClick={() => { this.gameHandler('paper') }}>PAPER</button>
          <button className='btn-rock' onClick={() => { this.gameHandler('rock') }}>ROCK</button>
        </div>
      )
    } else {
      return <button onClick={this.resetHandler}>Play Again</button>
    }
  }

  render () {
    return (
      <Layout {...this.props} >
        <div className='comp-choice'>The Computer's Choice: {this.state.computerChoice}</div><br />
        <div className='human-choice'>Your Choice: {this.state.humanChoice}</div> <br />
        <div className='total-games'>Total Games Played: {this.state.totalGames}</div><br />
        <div className='comp-wins'>Games won by the Computer: {this.state.computerCount}</div> <br />
        <div className='human-wins'>Games won by you: {this.state.humanCount}</div> <br />
        <div className='ties'>Number of Ties: {this.state.ties}</div> <br />
        {this.actions()}
        <div>{this.showSetWinner()}</div>
        <div>{this.showRoundWinner()}</div> <br />
        <Link href='/index'><a>Home Page</a></Link>
      </Layout>
    )
  }
}

export default App
