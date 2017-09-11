import { 
  RECEIVE_TOKEN
}
from '../constants/ActionTypes.js'

const initialState = {token: ''}

export default function token ( state = initialState, action) {
    
    if(action.type == RECEIVE_TOKEN){
      if(action.response != {}){
        // console.log("token", action.response)
        return {"user": action.response.user, "token": action.response.token}
      } 
      return state      
    }
    return state    
}