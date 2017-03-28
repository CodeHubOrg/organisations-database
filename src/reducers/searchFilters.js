/*
searchFilters = {
keyword: ['react', 'redux'],
resourceType: 'book',
}

Key Word  e.g. React (can we get this easily?)
Popularity/Rating
ResourceType e.g. url
Duration
Difficulty


*/
import { SELECT_FILTER } from '../constants/ActionTypes.js'
import * as CATEGORIES from '../constants/FilterCategories'


const initialState = { 
	[CATEGORIES.RESOURCE_TYPE]: 'all',
	[CATEGORIES.DIFFICULTY]: 'beginner'
}

function filter (state = initialState, action) {
	console.log('state: ', state)
	console.log('action.category :' , action.category)
  if (action.type === SELECT_FILTER) {
    return Object.assign({}, state, { [action.category]: action.filter})
  }
  return state
}

export default filter
