import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import withData from '../lib/apollo/withData'
import Process from '../components/_process'

class HomePage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <Process {...this.props} />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(HomePage)
