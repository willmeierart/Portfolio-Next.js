import Link from 'next/link'
import Circle from './Circle'

const AnimatedLogo = () => (
  <Link href='/tech'>
    <a className='splash'>
      <Circle classMod='circle-L' />
      <div className='splash-initials'> WM </div>
      <Circle classMod='circle-R' />
      <style jsx>{`
        .splash {
          position: relative;
          display: flex;
          align-self: center;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 80vh;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          font-family: 'proxima-nova-soft', sans-serif;
          overflow: hidden;
        }
        .splash-initials {
          animation: fade 9.6s infinite ease-in-out;
          position: absolute;
          font-family: Raleway;
          font-size: 3.5vw;
          font-weight: 300;
        }
      `}</style>
    </a>
  </Link>
)

export default AnimatedLogo
