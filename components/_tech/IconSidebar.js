import React, {Component} from 'react'
import { GoMarkGithub } from 'react-icons/lib/go'

export default class IconSidebar extends Component {
  render () {
    return (
      <div className='side-icons'>
        { this.props.icons.map((icon, i) => {
          return <img key={i} src={icon} />
        })}
        <a target='_blank' href={this.props.github}> <GoMarkGithub /></a>
      </div>
    )
  }
}
