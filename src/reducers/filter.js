import { SELECT_FILTER } from '../constants/ActionTypes.js'
const initialState = { filter: 'book' }

export default function filter (state = initialState, action) {
  if (action.type === SELECT_FILTER) {
    return Object.assign({}, {filter: action.filter})
  }
  return state
}
