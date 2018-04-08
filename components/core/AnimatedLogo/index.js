import { Link } from 'next/router'
import Spinner from './Spinner'

const AnimatedLogo = () => (
  <Link href='/tech' className='splash'>
    <Spinner className='spinner-L' />
    <div className='splash-initials'> WM </div>
    <Spinner className='spinner-R' />
  </Link>
)

export default AnimatedLogo
