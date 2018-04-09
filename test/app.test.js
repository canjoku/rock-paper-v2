import App from '../pages/app'

describe('Test suite for the <App /> component', () => {
  it('should check it renders correctly by comparing to a saved snapshot', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })

  it('should test the initial value of state', () => {
    const component = shallow(<App />)
    const { computerChoice, computerCount, humanChoice, humanCount, totalGames, roundWinner, ties } = component.state()
    expect(computerChoice).toEqual(null)
    expect(humanChoice).toEqual(null)
    expect(computerCount).toEqual(0)
    expect(humanCount).toEqual(0)
    expect(totalGames).toEqual(0)
    expect(roundWinner).toEqual(null)
    expect(ties).toEqual(0)
  })

  it('should test the rendering of state values in the DOM before any interaction with the App', () => {
    const component = shallow(<App />)
    const computerChoice = component.find('[data-behavior="comp-choice"]').text()
    const humanChoice = component.find('[data-behavior="human-choice"]').text()
    const totalGames = component.find('[data-behavior="total-games"]').text()
    const computerCount = component.find('[data-behavior="comp-wins"]').text()
    const humanCount = component.find('[data-behavior="human-wins"]').text()
    const ties = component.find('[data-behavior="ties"]').text()
    expect(computerChoice).toEqual("The Computer's Choice: ")
    expect(humanChoice).toEqual('Your Choice: ')
    expect(totalGames).toEqual('Total Games Played: 0')
    expect(computerCount).toEqual('Games won by the Computer: 0')
    expect(humanCount).toEqual('Games won by you: 0')
    expect(ties).toEqual('Number of Ties: 0')
  })

  it('should test the computer and player choices change from null when the player selects the scissors button', () => {
    const component = shallow(<App />)
    const scissorsButton = component.find('[data-behavior="btn-scissors"]')
    scissorsButton.simulate('click')
    const humanChoice = component.find('[data-behavior="human-choice"]').text()
    const totalGames = component.find('[data-behavior="total-games"]').text()
    expect(humanChoice).toEqual('Your Choice: scissors')
    expect(totalGames).toEqual('Total Games Played: 1')
  })

  it('should test the computer and player choices change from null when the player selects the paper button', () => {
    const component = shallow(<App />)
    const paperButton = component.find('[data-behavior="btn-paper"]')
    paperButton.simulate('click')
    const humanChoice = component.find('[data-behavior="human-choice"]').text()
    const totalGames = component.find('[data-behavior="total-games"]').text()
    expect(humanChoice).toEqual('Your Choice: paper')
    expect(totalGames).toEqual('Total Games Played: 1')
  })

  it('should test the computer and player choices change from null when the player selects the rock button', () => {
    const component = shallow(<App />)
    const rockButton = component.find('[data-behavior="btn-rock"]')
    rockButton.simulate('click')
    const humanChoice = component.find('[data-behavior="human-choice"]').text()
    const totalGames = component.find('[data-behavior="total-games"]').text()
    expect(humanChoice).toEqual('Your Choice: rock')
    expect(totalGames).toEqual('Total Games Played: 1')
  })

  it('updates the counter on every round and displays the set winner when total rounds equals 5', () => {
    const component = shallow(<App />)
    const rockButton = component.find('[data-behavior="btn-rock"]')
    const paperButton = component.find('[data-behavior="btn-paper"]')
    const scissorsButton = component.find('[data-behavior="btn-scissors"]')
    paperButton.simulate('click')
    rockButton.simulate('click')
    scissorsButton.simulate('click')
    paperButton.simulate('click')
    scissorsButton.simulate('click')
    const totalGames = component.find('[data-behavior="total-games"]').text()
    const setWinner = component.find('[data-behavior="set-winner"]')
    expect(totalGames).toEqual('Total Games Played: 5')
    expect(setWinner.length).toBe(1)
    expect(setWinner.exists)
  })

})
