import { combineReducers } from 'redux'
import items from './items'
import itemsview from './itemsview'
import searchFilters from './searchFilters'
import searchResults from './searchResults'
import searchKeyword from './searchKeyword'
import message from './message'
import users from './users'

const rootReducer = combineReducers({
  searchFilters,
  searchResults,
  searchKeyword,
  items,
  itemsview,
  message,
  users
})

export default rootReducer
