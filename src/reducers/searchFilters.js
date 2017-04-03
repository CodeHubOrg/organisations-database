/*
searchFilters = {
keyword: ['react', 'redux'],
resourceType: 'book',
}

*/
import { SELECT_FILTER } from '../constants/ActionTypes.js'
import * as CATEGORIES from '../constants/FilterCategories'


const initialState = { 
	  [CATEGORIES.RESOURCE_TYPE]: 'all',
	  [CATEGORIES.DIFFICULTY]: 'beginner'
}

function searchFilters (state = initialState, action) {
  if (action.type === SELECT_FILTER) {
    return Object.assign({}, state, { [action.category]: action.filter})
  }
  return state
}

export default searchFilters
