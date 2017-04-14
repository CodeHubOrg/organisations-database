

import { 
    SELECT_ITEM, 
    DESELECT_ITEM, 
    ADD_ITEM, 
    DELETE_ITEM, 
    EDIT_ITEM,
    HANDLE_XHR_ERROR
} from '../constants/ActionTypes.js';

const initialState = [
	{
		name: 'JavaScript 101',
		selected: false,
		id: 1,
		description: "Group for learning JavaScript",
		url: "http://www.meetup.com/CodeHub-Bristol/",
		imagepath: "../constants/javascript101_logo.jpeg",
	}	
];


export default function items ( state = initialState, action ) {
    if(action.error){
      action.type = 'HANDLE_XHR_ERROR'
    }
    switch (action.type) {
        case SELECT_ITEM:
            return  state.map(item => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {selected: true})
                }
                return Object.assign({}, item, {selected: false})
            })

        case DESELECT_ITEM:
            return  state.map(item => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {selected: false})
                }
                return item
            })

        case ADD_ITEM:
            return state.concat([                
                action.payload.data
            ])


        case EDIT_ITEM:
            const updated = state.map(item => {
                if (item.id === action.payload.data.id) {
                    return Object.assign({}, action.payload.data)
                }
                return item;
            })

        case DELETE_ITEM:
            return state.filter(item => {
                if (item.id !== action.id) return item;
            })

        case HANDLE_XHR_ERROR:
            console.log(action.error)
            return state;

        default:
            return state;
    }
}
