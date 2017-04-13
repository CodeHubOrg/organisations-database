import { combineReducers } from 'redux'
import items from 'items'
import itemsview from 'itemsview'
import searchFilters from 'searchFilters'
import searchResults from 'searchResults'
import searchKeyword from 'searchKeyword'

const rootReducer = combineReducers({
  searchFilters,
  searchResults,
  searchKeyword,
  items,
  itemsview
})

export default rootReducer
