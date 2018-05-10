import { combineReducers } from 'redux'
import envReducer from './envReducer'
import artReducer from './artReducer'

const rootReducer = combineReducers({
  env: envReducer,
  art: artReducer
})

export default rootReducer
