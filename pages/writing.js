import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import withData from '../lib/apollo/withData'
import Writing from '../components/_writing'

class WritingPage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <Writing {...this.props} />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(WritingPage)
