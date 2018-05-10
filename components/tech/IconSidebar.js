import React, {Component} from 'react'
import { GoMarkGithub } from 'react-icons/lib/go'

export default class IconSidebar extends Component {
  render () {
    return (
      <div className='side-icons'>
        { this.props.icons.map((icon, i) => {
          return <img key={i} src={icon} />
        })}
        <a target='_blank' href={this.props.github}>
          <GoMarkGithub />
        </a>
        <style jsx>{`
          @media (min-width: 700px) {
            .side-icons * {
              width: 50px;
              height: 50px;
            }
          }
          @media (max-width: 699px && min-width: 486px) {
            .side-icons * {
              width: 40px;
              height: 40px;
            }
          }
          @media (max-width: 699px && min-width: 486px) {
            .side-icons * {
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </div>
    )
  }
}
