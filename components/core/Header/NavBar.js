import React, {Component} from 'react'
import _ from 'lodash'
import Link from 'next/link'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import categories from '../../../lib/data/categories'
import { binder } from '../../../lib/_utils'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = { strong: '', selected: '', hovered: '' }
    binder(this, ['renderLinks', 'showTaglines', 'hideTaglines'])
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.accentTag !== this.state.strong) {
      this.setState({ strong: nextProps.accentTag })
    }
  }

  showTaglines (tagline) { this.setState({ hovered: tagline }) }
  hideTaglines () { this.setState({ hovered: '' }) }

  renderLinks () {
    const { activeLink } = this.props
    const { strong } = this.state
    return _.map(categories, category => {
      let stylin = {}
      let k = 'a'
      if (this.state.strong !== category.title) {
        k = 'b'
      }
      return (
        <ReactCSSTransitionReplace
          key={category.title}
          transitionName='cross-fade'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <div key={category.title + k}
            onMouseEnter={() => this.showTaglines(category.title)}
            onMouseLeave={this.hideTaglines}
            className='navbar-item'>
            <Link href={category.href}>
              { category.title }
            </Link>
            <style jsx>{`
              font-weight: ${activeLink === category.title ? 700 : 'normal'};
              opacity: ${strong ? 0.5 : 1};
            `}</style>
          </div>
        </ReactCSSTransitionReplace>
      )
    })
  }
  render () {
    return (
      <div className='navbar'>
        { this.renderLinks() }
        <style jsx>{`
          .navbar {
            grid-row: 6/7;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            color: black;
          }
          @media (min-width: 486px) {
            .navbar {
              grid-column: 3/5;
            }
          }
        `}</style>
      </div>
    )
  }
}
