import React, { Component } from 'react'
import AppProvider from '../lib/redux/AppProvider'
import Art from '../components/art'
import withData from '../lib/apollo/withData'

class ArtPage extends Component {
  render () {
    return (
      <AppProvider url={this.props.url} title='Home'>
        <Art {...this.props} />
        <style jsx>{`
        `}</style>
      </AppProvider>
    )
  }
}

export default withData(ArtPage)
