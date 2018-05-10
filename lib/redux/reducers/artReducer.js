import { SET_ACTIVE_ITEMS, TOGGLE_ACTIVE_ITEM, SET_ALL_ITEMS, SET_ALL_LINKS } from '../actions/types'
// import { flatConcepts } from '../../data/artConcepts'

const initialState = {
  activeItems: [],
  inactiveItems: [],
  allLinks: [],
  allItems: {}
}

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ITEMS : {
      const newState = { ...state }
      newState.activeItems = action.payload
      return newState
    }
    case TOGGLE_ACTIVE_ITEM : {
      let newSet = [...state.activeItems]
      let newInactive = [...state.inactiveItems]
      const isActive = newSet.includes(action.payload)
      if (isActive) {
        newSet = newSet.filter(item => item !== action.payload)
        newInactive.push(action.payload)
      } else {
        newInactive = newInactive.filter(item => item !== action.payload)
        newSet.push(action.payload)
      }
      const newState = { ...state }
      newState.inactiveItems = newInactive
      newState.activeItems = newSet
      return newState
    }
    case SET_ALL_ITEMS : {
      const newState = { ...state }
      newState.allItems = action.payload
      return newState
    }
    case SET_ALL_LINKS : {
      const newState = { ...state }
      newState.allLinks = action.payload
      return newState
    }
    default:
      return state
  }
}

export default artReducer
