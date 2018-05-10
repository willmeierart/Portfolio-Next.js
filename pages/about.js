import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import withData from '../lib/apollo/withData'
import About from '../components/about'

class AboutPage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <About {...this.props} />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(AboutPage)
