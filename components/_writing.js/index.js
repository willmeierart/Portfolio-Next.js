import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataManager from '../../containers/Writing'

class Writing extends Component {
  // constructor (props) {
  //   super(props)

  // }
  render () {
    return (
      <div style={{ marginTop: '5vh' }} className='writing-main'>
        <a href='https://medium.com/@willmeierart' target='_blank'>
          <svg width='350px' viewBox='0 0 256 208'>
            <path d='M177.735242,1.67620228 C173.837865,-0.18165739 170.650604,1.69271659 170.650604,5.85432226 L170.650604,171.360719 L241.794244,205.322394 C249.622026,209.120685 255.971777,206.478396 255.971777,199.542386 L255.971777,40.1793119 C255.971777,39.5187396 255.55892,38.9407388 254.94789,38.6104526 L177.743499,1.78354529 L177.743499,1.70097375 L177.735242,1.67620228 L177.735242,1.67620228 Z' fill='#32FC8D' />
            <path d='M85.3211734,130.636435 L166.488998,4.73960646 C168.784487,1.18903019 173.837865,-0.214686007 177.718728,1.6018879 L255.038719,38.5113668 C255.534148,38.7590814 255.715806,39.3370822 255.426805,39.7499399 L170.642347,171.377233 L85.3211734,130.652949 L85.3211734,130.636435 L85.3211734,130.636435 Z' fill='#0BE370' />
            <path d='M11.8077304,3.9221482 C5.31760724,0.825715411 3.1129471,3.12946141 6.91949514,9.04158375 L85.3211734,130.636435 L170.642347,171.360719 L85.5110879,39.3040535 C85.3872306,39.114139 85.2138304,38.9572531 85.0156587,38.8581672 L11.8077304,3.93040535 L11.8077304,3.9221482 L11.8077304,3.9221482 Z' fill='#14C767' />
            <path d='M85.3211734,199.476329 C85.3211734,206.412338 80.0118233,209.550057 73.513443,206.445367 L7.08463822,174.737895 C3.18726149,172.888293 0,167.967029 0,163.797166 L0,8.38101142 C0,2.83220386 4.25243436,0.32202901 9.45444145,2.8074324 L84.8670299,38.8086243 C85.1477731,38.9324816 85.3211734,39.2049677 85.3211734,39.5022252 L85.3211734,199.4433 L85.3211734,199.476329 L85.3211734,199.476329 Z' fill='#00AB6C' />
          </svg>
        </a>
      </div>
    )
  }
}

export default DataManager(Writing)
