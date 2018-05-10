import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import AnimatedLogo from '../components/core/AnimatedLogo'
import withData from '../lib/apollo/withData'

class HomePage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <AnimatedLogo />
      </AppProvider>
    )
  }
}

export default withData(HomePage)
