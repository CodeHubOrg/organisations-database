import { combineReducers } from 'redux'
import organisations from './organisations'
import formupdates from './formupdates'

const rootReducer = combineReducers({
  organisations,
  formupdates
})

export default rootReducer
