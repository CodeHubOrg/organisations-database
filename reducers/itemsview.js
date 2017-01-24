
import { SELECT_VIEW } from '../constants/ActionTypes.js'
const initialState = {view: "list"}

export default function itemsview (state = initialState, action ) {
  if(action.type == SELECT_VIEW) {
      return Object.assign({},{view: action.view})
  }
  return state
}