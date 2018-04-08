import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import withData from '../lib/apollo/withData'

class HomePage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <div />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(HomePage)
