import { 
    UPDATE_FORM
} from '../constants/ActionTypes.js';

const initialState = [
    {
        id:1,
        value:""
    }
    
];

export default function formupdates( state = initialState, action ) {
    switch (action.type) {
        
        case UPDATE_FORM:
            return state.map(update => {
                if (update.id === action.id) {
                    return Object.assign({}, update, {value: action.value})
                }
                return update;
            })

        default:
            return state;
    }
}