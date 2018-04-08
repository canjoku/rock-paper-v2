import App from '../pages/app'

test("<App /> renders correctly", () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})
