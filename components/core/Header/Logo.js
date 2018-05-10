import React, { Component } from 'react'

const Logo = () => (
  <div className='logo'>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 595.5 397.5'><title>Logo</title><g id='Layer_2' data-name='Layer 2'><g id='Layer_1-2' data-name='Layer 1'><circle className='cls-1' cx='198.5' cy='199' r='198'/><circle className='cls-1' cx='397' cy='198.5' r='198'/><text className='cls-2' transform='translate(243.67 219.56) scale(1.19 1)'>WM</text></g></g></svg>
    <style jsx>{`
      .logo {
        grid-column: 1/2;
      }
      .cls-1 {
        fill: none;
        stroke: #000;
        stroke-miterlimit: 10;
      }
      .cls-2 {
        font-size: 59px;
        font-family: TTCoralsThinDEMO, TT Corals Thin DEMO;
      }
    `}</style>
  </div>
)

export default Logo
