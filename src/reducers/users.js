import {
    LOGIN,
    LOGOUT,
    CHECK_LOGIN
} from '../constants/ActionTypes'

const initialState = [
    { username:'katjad',
      loggedIn: false },  
    { username:'gicela',
      loggedIn: false },   
    { username:'wingedeel',
      loggedIn: false },   
    { username:'rinse0ut',
      loggedIn: false },   
    { username:'mjg17',
      loggedIn: false },  
    { username:'nat47',
      loggedIn: false },   
    { username:'timhandy',
      loggedIn: false },   
    { username:'archdd',
      loggedIn: false },  
    { username:'dandel10n',
      loggedIn: false },   
    { username:'me--2014',
      loggedIn: false },  
    { username:'trianah',
      loggedIn: false },  
    { username:'hvarley',
      loggedIn: false },  
    { username:'dillonkeithdiep',
      loggedIn: false},
    { username: 'smallhadroncollider',
      loggedIn: false},
    { username: 'tbuyus',
      loggedIn: false }
]

export default function users ( state = initialState, action ) {
    switch (action.type) {
        case LOGIN:
            return state.map(user => {
                if (user.username === action.username) {
                    return Object.assign({}, user, {loggedIn: true})
                }
                return user
            })
        case LOGOUT:
            return state.map(user => {
                if (user.username === action.username) {
                    return Object.assign({}, user, {loggedIn: false})
                }
                return user
            })

        default:
            return state
    }
}