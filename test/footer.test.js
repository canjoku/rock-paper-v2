import Footer from '../components/footer'

test('<Footer /> renders correctly', () => {
  const component = shallow(<Footer />)
  expect(component).toMatchSnapshot()
})
