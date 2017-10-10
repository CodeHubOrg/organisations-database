import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'
import searchFilters from './searchFilters'
import searchResults from './searchResults'
import searchKeyword from './searchKeyword'
import message from './message'
import auth from './auth'

const rootReducer = combineReducers({
  searchFilters,
  searchResults,
  searchKeyword,
  items,
  itemsview,
  message,
  auth
})

export default rootReducer
