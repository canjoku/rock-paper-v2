import { Component } from 'react'
import Footer from '../components/footer'
import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <div>
      <h1>WELCOME TO ROCK-PAPER-SCISSORS-GAME</h1>
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout
