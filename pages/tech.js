import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import withData from '../lib/apollo/withData'
import Tech from '../components/tech'

class TechPage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <Tech {...this.props} />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(TechPage)
