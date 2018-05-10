import PropTypes from 'prop-types'

const MenuButton = ({ showCloudNav, toggleCloudNav }) => {
  return (
    <div className='nav-btn-wrapper'>
      <div className={`show-nav-btn ${showCloudNav && 'open'}`} onClick={toggleCloudNav}>
        <span className='line a' />
        <span className='line b' />
        <span className='line c' />
        <span className='line d' />
      </div>
      <style jsx>{`
        .nav-btn-wrapper {
            position: absolute;
            width: 30px;
            height: 21px;
            top: 200px;
            right: 50px;
            cursor: pointer;
          }
          .show-nav-btn {
            z-index: 1000000000;
            width: 100%;
            height: 100%;
            position: relative;
          }
          .line {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: black;
            transform: rotate(0deg);
            transition: .25s transform ease-in-out;
          }
          .line.a {
            top: 0px;
          }
          .line.b, .line.c {
            top: 7px;
          }
          .line.d {
            top: 14px;
          }
          .open .a, .open .d {
            top: 4px;
            left: 50%;
            width: 0%;
          }
          .open .b {
            transform: rotate(45deg);
          }
          .open .c {
            transform: rotate(-45deg);
          }
      `}</style>
    </div>
  )
}

MenuButton.propTypes = {

}

export default MenuButton
