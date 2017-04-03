
import { 
    SELECT_ITEM, 
    DESELECT_ITEM, 
    ADD_ITEM, 
    DELETE_ITEM, 
    EDIT_ITEM
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
    switch (action.type) {
        case SELECT_ITEM:
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {selected: true})
                }
                return Object.assign({}, org, {selected: false})
            })

        case DESELECT_ITEM:
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {selected: false})
                }
                return org
            })

        case ADD_ITEM:
            return state.concat([{
                name: action.name,
                selected: false,
                id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) +1
            }])

        case EDIT_ITEM:
            return state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {name: action.name})
                }
                return org;
            })

        case DELETE_ITEM:
            return state.filter(org => {
                if (org.id !== action.id) return org;
            })

        default:
            return state;
    }
}
