import {
  CHECK_IF_MOBILE,
  CHECK_IF_IE,
  CHECK_BROWSER,
  GET_VP_DIMS, 
  LOCK_ORIENTATION,
  SET_ACTIVE_ITEMS,
  TOGGLE_ACTIVE_ITEM,
  SET_ALL_ITEMS,
  SET_ALL_LINKS
} from './types'

// env actions
export const checkIfMobile = () => async dispatch => {
  const bool = window !== undefined && window.orientation !== undefined
  dispatch({
    type: CHECK_IF_MOBILE,
    payload: bool
  })
}

export const checkIfIE = () => async dispatch => {
  const check = () => {
    if (typeof window !== 'undefined') {
      return window.navigator.userAgent.indexOf('indows') !== -1
    } else { setTimeout(() => { check() }, 200) }
  }
  dispatch({
    type: CHECK_IF_IE,
    payload: check()
  })
}

export const checkBrowser = () => async dispatch => {
  let browser = 'unknown'
  if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
    browser = 'opera'
  } else if (navigator.userAgent.indexOf('chrome') !== -1) {
    browser = 'chrome'
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    browser = 'safari'
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    browser = 'firefox'
  } else if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) {
    browser = 'ie'
  }
  dispatch({
    type: CHECK_BROWSER,
    payload: browser
  })
}

export const getVPDims = () => async dispatch => {
  const getDims = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => { this.getDims() })
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    } else { setTimeout(() => { getDims() }, 200) }
  }
  dispatch({
    type: GET_VP_DIMS,
    payload: getDims()
  })
}

export const lockOrientation = () => async dispatch => { // experimental, will not work yet in anything except firefox mobile
  const lockScreen = () => {
    if (typeof window !== 'undefined') {
      const { screen } = window
      screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation
      if (typeof screen.lockOrientationUniversal !== 'undefined') {
        return screen.lockOrientationUniversal('portrait-primary')
      } else {
        console.log('"screen.lockOrientation" not supported on this device')
        return false
      }
    } else {
      setTimeout(() => { lockScreen() }, 500)
    }
  }
  dispatch({
    type: LOCK_ORIENTATION,
    payload: lockScreen()
  })
}

// art actions
export const setActiveItems = itemObj => {
  return {
    type: SET_ACTIVE_ITEMS,
    payload: itemObj
  }
}

export const toggleActiveItem = item => {
  return {
    type: TOGGLE_ACTIVE_ITEM,
    payload: item
  }
}

export const setAllItems = items => {
  return {
    type: SET_ALL_ITEMS,
    payload: items
  }
}

export const setAllLinks = links => {
  return {
    type: SET_ALL_LINKS,
    payload: links
  }
}
