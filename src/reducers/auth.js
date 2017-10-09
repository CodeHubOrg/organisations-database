import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
}
from '../constants/ActionTypes.js'

const inititialState = {authenticated: false, error: ''}

export default function(state = inititialState, action){
    switch(action.type) {
        case AUTH_USER:
            return Object.assign({}, state, {error:''}, {authenticated: true} );
        case UNAUTH_USER:
            return Object.assign({}, state, {authenticated: false} );
        case AUTH_ERROR:
            return Object.assign({}, state, {error: action.error});
    }
    return state;
}
