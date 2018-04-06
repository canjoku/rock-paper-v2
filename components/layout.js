
import '../scss/appliation.scss'
import Footer from '../components/footer'
import { Component } from 'react'
import Head from 'next/head'

class Layout extends Component {
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <div className='container'>
            <div><h1>NAVIGATION BAR</h1></div><br />
            {this.props.children}
            <Footer />
          </div>

        </body>
      </html>
    )
  }
}

export default Layout
