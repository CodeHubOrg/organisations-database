import { 
    SELECT_ORGANISATION, 
    DESELECT_ORGANISATION, 
    ADD_ORGANISATION, 
    DELETE_ORGANISATION, 
    EDIT_ORGANISATION 
} from '../constants/ActionTypes.js';

import resources from './dbconnect.js';

const initalState = [
    {
        name: 'JavaScript 101',
        selected: false,
        id: 1
    }
];

export default function organisations ( state = initalState, action ) {
    switch (action.type) {
        case SELECT_ORGANISATION:
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {selected: true})
                }
                return Object.assign({}, org, {selected: false})
            })

        case DESELECT_ORGANISATION:
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {selected: false})
                }
                return org
            })

        case ADD_ORGANISATION:
            return state.concat([{
                name: action.name,
                selected: false,
                id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) +1
            }])

        case EDIT_ORGANISATION:
            return state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {name: action.name})
                }
                return org;
            })

        case DELETE_ORGANISATION:
            return state.filter(org => {
                if (org.id !== action.id) return org;
            })

        default:
            return state;
    }
}
