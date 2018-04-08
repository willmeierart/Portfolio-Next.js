import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

export default class Screen extends Component {
  constructor (props) {
    super(props)
    this.state = { currentSRC: this.props.images[0] }
    this.carousel = this.carousel.bind(this)
    this.interval = null
  }
  componentDidMount () {
    this.carousel()
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  carousel () {
    const { images } = this.props
    let i = 0
    this.interval = setInterval(() => {
      this.setState({ currentSRC: images[i] })
      ++i
      if (i === images.length) { i = 0 }
    }, 4000)
  }
  render () {
    const { url } = this.props
    const { length } = this.props.images
    const backdrop = length === 0 ? 'white' : 'black'
    return (
      <div className='screen'>
        <container>
          <div className='outer'>
            <div className='inner'>
              {length == 0 ? (
                <iframe
                  className='iframe'
                  src={url}
                  frameBorder='0'
                  style={{ zIndex: 3 }}
                  scrolling='no'
                />
              ) : (
                <ReactCSSTransitionReplace
                  component='div'
                  style={{ width: '100%', height: '100%', zIndex: 3 }}
                  transitionName='image-fade'
                  transitionEnterTimeout={2000}
                  transitionLeaveTimeout={2000}
                >
                  <div
                    key={this.state.currentSRC}
                    className='screen-image-container'
                  >
                    <img className='screen-image' src={this.state.currentSRC} />
                  </div>
                </ReactCSSTransitionReplace>
              )}
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  background: backdrop,
                  zIndex: 2
                }}
              />
            </div>
            <div className='url'>
              <a target='_blank' href={url}>
                {url}
              </a>
            </div>
          </div>
          <div className='base' />
        </container>
      </div>
    )
  }
}
