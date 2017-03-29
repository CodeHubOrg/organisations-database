/*
Stores the items selected as a result of a search
[
	{
		author:"Marijn Haverbeke"
		description:"Starts with the basics of JS",
		difficulty:"1",
		duration:"long",
		id:1,
		meta:Object,
		name:"Eloquent JavaScript",
		selected:false,
		type:"Book"
	}
]
*/

import { SET_SEARCH_RESULTS } from '../constants/ActionTypes.js'

const initialState = { items: [] }

function searchResults (state = initialState, action) {
  if (action.type === SET_SEARCH_RESULTS) {
    return Object.assign({}, { items : action.resultItems})
  }
  return state
}

export default searchResults
