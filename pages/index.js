import { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <p>Welcome to the Rock Paper Scissors Game</p>
      <Link href='/app'>Click to Play</Link>
    </Layout>
  }
}

export default Index
