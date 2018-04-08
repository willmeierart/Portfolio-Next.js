import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataManager from '../../containers/Art'
import CloudNavD3 from './CloudNavD3'
import { binder } from '../../lib/_utils'

class Art extends Component {
  constructor (props) {
    super(props)
    this.state = { showCloudNav: true }
    binder(this, ['toggleCloudNav'])
  }

  toggleCloudNav () { this.setState({ showCloudNav: !this.state.showCloudNav }) }

  render () {
    return (
      <div className='outer-wrapper'>
        <div className='inner-wrapper'>
          { this.state.showCloudNav
            ? <div className='cloud-nav-wrapper'>
              <CloudNavD3 {...this.props} />
            </div>
            : <div />
          }
        </div>
      </div>
    )
  }
}

export default DataManager(Art)
