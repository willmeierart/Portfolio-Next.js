import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SocialIcons from './SocialIcons'

export default class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = { sidebarOpen: false }
    this.openSidebar = this.openSidebar.bind(this)
  }

  openSidebar () { this.setState({ sidebarOpen: !this.state.sidebarOpen }) }

  render () {
    return (
      <div>
        <div className='sidebar'>
          <SocialIcons />
          <ReactCSSTransitionGroup
            component='div'
            transitionName='sidebar-open'
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            { this.state.sidebarOpen &&
              <div key='sidebar' className='menu' />
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
