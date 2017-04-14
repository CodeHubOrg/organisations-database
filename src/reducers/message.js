import { 
  HANDLE_XHR_ERROR,
  SET_MESSAGE
}
from '../constants/ActionTypes.js'

const initialState = {message: ''}

export default function message ( state = initialState, action) {
  switch (action.type) {
    case HANDLE_XHR_ERROR:
      return {message:'There has been an error.'}

    case SET_MESSAGE:
      return {message: action.payload}
    
    default: 
      return state
  }
}
