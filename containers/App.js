// main wrapper component - layout, universal styles, etc.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkIfMobile, getVPDims } from '../lib/redux/actions'
import Header from '../components/core/Header'
import Footer from '../components/core/Footer'

// import globalStyles from '../../styles/index.scss'

class App extends Component {
  componentDidMount () {

  }
  render () {
    const { children, url } = this.props
    console.log(url)
    
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          { url.pathname !== '/' && <Header /> }
          <main>{ children }</main>
          { url.pathname !== '/' && <Footer /> }
        </div>
        <style jsx global>{`
          a {
            text-decoration: none;
            color: inherit;
          }
          li {
            list-style: none;
          }
          body {
            height: 100vh;
            width: 100vw;
            box-sizing: border-box;
            font-family: Raleway;
            font-weight: 100;
          }
          main {
            height: 100%;
            grid-column: 1/2;
            margin: 0 auto;
          }
          h1 {
            font-family: Raleway;
            font-weight: 100;
            text-transform: uppercase;
          }
          .responsive-wrapper {
            display: flex;
            justify-content: space-between;
          }
          .app-outer {
            display: grid;
            grid-template-columns: 1fr auto;
          }
          @media (min-width: 700px) {
            .responsive-wrapper {
              flex-direction: row;
            }
          }
          @media (max-width: 699px) and (min-width: 486px) {
            .responsive-wrapper {
              flex-direction: column;
            }
          }
          .reponsive-wrapper {
            display: flex;
            justify-content: space-between;
          }
          @keyframes fade {
            0% { opacity: 1; }
            50% { opacity: .25; }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fade-in{
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
        {/* <style dangerouslySetInnerHTML={{ __html: globalStyles }} /> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMobile: state.env.isMobile,
    dims: state.env.dims
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onCheckIfMobile: () => dispatch(checkIfMobile()),
    onGetVPDims: () => dispatch(getVPDims())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App

App.propTypes = {
  title: PropTypes.string.isRequired
}
