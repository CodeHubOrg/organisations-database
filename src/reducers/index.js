import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'

const rootReducer = combineReducers({
  items,
  itemsview
})

export default rootReducer
