import React, { Component } from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import Logo from './Logo'
import Tagline from './Tagline'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeLink: 'web',
      accentTag: ''
    }
    this.accentLink = this.accentLink.bind(this)
  }
  accentLink (link) {
    this.setState({ accentTag: link })
  }

  render () {
    return (
      <div>
        <header>
          <div className='title'>
            <Link href='/tech'>
              <Logo />
            </Link>
            <h1>WILL MEIER</h1>
            <Tagline accentLink={this.accentLink} />
          </div>
          <hr />
          <NavBar
            activeLink={this.state.activeLink}
            accentTag={this.state.accentTag}
          />
        </header>
        <style jsx>{`
          header {
            display: grid;
            grid-column: 1/2;
            grid-template-columns: 17vw 5px auto 2fr 1fr;
          }
          .title {
            display: grid;
            grid-column: 1/2;
            grid-template-columns: 17vw 5px auto 5px 80px;
            grid-row: 1/8;
            grid-column: 1/4;
            align-items: center;
          }
          h1 {
            grid-column: 3/4;
          }
          hr {
            width: 100%;
            height: 1px;
            background-color: rgb(200,200,200);
            border: none;
            grid-row: 5/6;
            grid-column: 3/6;
          }
          @media (min-width: 700px) {
            header {
              grid-template-rows: repeat(7, 1fr);
            }
          }
          @media(max-width: 699px) and (min-width: 486px) {
            header {
              grid-template-rows: repeat(3, 1fr);
            }
            hr {
              margin-bottom: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
