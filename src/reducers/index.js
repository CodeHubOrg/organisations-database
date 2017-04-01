import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'
import searchFilters from './searchFilters'
import searchResults from './searchResults'

const rootReducer = combineReducers({
  searchFilters,
  searchResults,
  items,
  itemsview
})

export default rootReducer
