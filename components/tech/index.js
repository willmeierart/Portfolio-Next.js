import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataManager from '../../containers/Tech'
import TechProject from './TechProject'

class Tech extends Component {
  // constructor (props) {
  //   super(props)

  // }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    const data = this.props.data.allTechProjects
    const projects = data.map((project, i) => (
      <div key={i}>
        <TechProject data={project} />
        <hr />
      </div>
    ))
    return (
      <div className='tech-main'>
        <h1>Tech Projects</h1>
        { projects }
      </div>
    )
  }
}

export default DataManager(Tech)
