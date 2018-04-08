import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import { binder } from '../lib/_utils'
import WithApolloLoader from '../components/hoc/WithApolloLoader'
import { setActiveItems } from '../lib/redux/actions'

export default function DataManager (ComposedComponent) {
  class WrappedComponent extends Component {
    constructor (props) {
      super(props)
      binder(this, [])
    }
    componentDidMount () {}
    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  return compose(
    graphql()
  )(
    connect(mapStateToProps, mapDispatchToProps)(
      WithApolloLoader(
        WrappedComponent
      )
    )
  )
}

const mapStateToProps = state => {
  return {
    activeItems: state.art.activeItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetActiveItems: item => dispatch(setActiveItems(item))
  }
}

DataManager.propTypes = {}
