import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'
import searchFilters from './searchFilters'

const rootReducer = combineReducers({
  searchFilters,
  items,
  itemsview
})

export default rootReducer
