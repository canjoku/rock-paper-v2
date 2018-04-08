import App from '../pages/app'

describe('<App /> component', () => {
  it('<App /> renders correctly', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })

  it('Initial values of state objects', () => {
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

  it('Rendering of state values in the DOM before any interaction with the App', () => {
    const component = shallow(<App />)
    const computerChoice = component.find('.comp-choice').text()
    const humanChoice = component.find('.human-choice').text()
    const totalGames = component.find('.total-games').text()
    const computerCount = component.find('.comp-wins').text()
    const humanCount = component.find('.human-wins').text()
    const ties = component.find('.ties').text()
    expect(computerChoice).toEqual("The Computer's Choice: ")
    expect(humanChoice).toEqual('Your Choice: ')
    expect(totalGames).toEqual('Total Games Played: 0')
    expect(computerCount).toEqual('Games won by the Computer: 0')
    expect(humanCount).toEqual('Games won by you: 0')
    expect(ties).toEqual('Number of Ties: 0')
  })

  it('the computer and player choices changes from null when the player selects the scissors button', () => {
    const component = shallow(<App />)
    const scissorsButton = component.find('.btn-scissors')
    scissorsButton.simulate('click')
    const humanChoice = component.find('.human-choice').text()
    const totalGames = component.find('.total-games').text()
    expect(humanChoice).toEqual('Your Choice: scissors')
    expect(totalGames).toEqual('Total Games Played: 1')
  })

  it('the computer and player choices changes from null when the player selects the paper button', () => {
    const component = shallow(<App />)
    const paperButton = component.find('.btn-paper')
    paperButton.simulate('click')
    const humanChoice = component.find('.human-choice').text()
    const totalGames = component.find('.total-games').text()
    expect(humanChoice).toEqual('Your Choice: paper')
    expect(totalGames).toEqual('Total Games Played: 1')
  })
  test('the computer and player choices changes from null when the player selects the rock button', () => {
    const component = shallow(<App />)
    const rockButton = component.find('.btn-rock')
    rockButton.simulate('click')
    const humanChoice = component.find('.human-choice').text()
    const totalGames = component.find('.total-games').text()
    expect(humanChoice).toEqual('Your Choice: rock')
    expect(totalGames).toEqual('Total Games Played: 1')
  })
})
