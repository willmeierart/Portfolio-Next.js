import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataManager from '../../containers/Art'
import CloudNavD3 from './CloudNavD3'
import MenuButton from './MenuButton'
import { binder } from '../../lib/_utils'
import { flatConcepts } from '../../lib/data/artConcepts'

class Art extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCloudNav: true,
      conceptData: this.props.concepts
    }
    binder(this, ['toggleCloudNav'])
    this.fakeData = false
  }

  componentDidMount () {
    if (this.props.activeItems.length === 0) {
      this.props.onSetActiveItems(this.props.concepts)
    }
    // console.log(this.props.concepts)
    // console.log(this.props.activeItems)
  }
  componentDidUpdate (prevProps) {
    if (this.props.concepts !== prevProps.concepts) {
      if (this.props.activeItems.length === 0) {
        console.log(this.props.concepts)
        this.props.onSetActiveItems(this.props.concepts)
      }
    }
  }

  toggleCloudNav () { this.setState({ showCloudNav: !this.state.showCloudNav }) }

  render () {
    console.log(this.props)
    return (
      <div className='outer-wrapper'>
        <div className='inner-wrapper'>
          <MenuButton showCloudNav={this.state.showCloudNav} toggleCloudNav={this.toggleCloudNav} />
          { this.state.showCloudNav
            ? <div className='cloud-nav-wrapper'>
              <CloudNavD3 {...this.props}
                allItems={this.props.concepts}
                activeItems={this.props.activeItems}
                toggleActiveItem={this.props.onToggleActiveItem}
                toggleCloudNav={this.toggleCloudNav} />
            </div>
            : <div />
          }
        </div>
        <style jsx>{`
          .inner-container {
            position: relative
          }
        `}</style>
      </div>
    )
  }
}

export default DataManager(Art)
