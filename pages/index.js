import { Component } from 'react'
import Link from 'next/link'

import Layout from '../components/layout'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <p>here</p>
      <Link href='/app'><a>Click to Play</a></Link>
    </Layout>
  }
}

export default Index