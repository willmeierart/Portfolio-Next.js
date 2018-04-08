import React, { Component } from 'react'
import Screen from './Screen'
import IconSidebar from './IconSidebar'

export default class TechProject extends Component {
  render () {
    const { data } = this.props
    return (
      <div className='tech-project'>
        <h1 className='title'>{ data.title }</h1>
        <Screen url={data.url} images={data.images} />
        <IconSidebar icons={data.technologies} github={data.github} />
        <div className='description'>
          <p>{ data.description }</p>
        </div>
      </div>
    )
  }
}
