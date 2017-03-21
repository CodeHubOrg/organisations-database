import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'
import filter from './filter'

const rootReducer = combineReducers({
  filter,
  items,
  itemsview
})

export default rootReducer
