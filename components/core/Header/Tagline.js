import React, {Component} from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { binder } from '../../../lib/_utils'

export default class Tagline extends Component {
  constructor (props) {
    super(props)
    this.state = { currentTag: 'who' }
    binder(['tagSwitcher', 'sendUpTag'])
  }

  componentWillMount () { this.tagSwitcher() }

  sendUpTag (tag) {
    switch (tag) {
      case 'developer':
        tag = 'web'
        break
      case 'designer':
        tag = 'etc'
        break
      case 'artist':
        tag = 'art'
        break
      case 'writer':
        tag = 'txt'
        break
      default:
        tag = 'who'
        break
    }
    this.props.accentLink(tag)
  }
  tagSwitcher () {
    const options = ['developer', 'artist', 'writer', 'designer']
    let i = 0
    return setInterval(() => {
      this.setState({ currentTag: options[i] })
      this.sendUpTag(options[i])
      ++i
      if (i === options.length) { i = 0 }
    }, 1500)
  }
  render () {
    return (
      <div className='tagline'>
        <ReactCSSTransitionReplace
          transitionName='cross-fade'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <div key={this.state.currentTag}>{this.state.currentTag}</div>
        </ReactCSSTransitionReplace>
      </div>
    )
  }
}
