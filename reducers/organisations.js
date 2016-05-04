'use strict';

const initialState = [
    {
        name: 'JavaScript 101',
        selected: false,
        id: 1
    }
];

export default function organisations (state = initialState, action) {

    switch (action.type) {
        case 'SELECT_ORGANISATION':
            return Object.assign(state,
                state.reduce((arr, org) => {
                    if (org.id === action.id) {
                       org.selected = true;
                       return org;
                    }
                },[])
            );

        case 'DESELECT_ORGANISATION':
            return Object.assign(state,
                state.reduce((arr, org) => {
                    if (org.id === action.id) {
                        org.selected = false;
                        return org;
                    }
                },[])
            );

        case 'ADD_ORGANISATION':
            state.push({
                name: action.name,
                selected: false,
                id: state.length + 1
            });
            return state;

        case 'EDIT_ORGANISATION':
            return Object.assign(state,
                state.reduce((arr, org) => {
                    if (org.id === action.id) {
                        org.name = action.name;
                        return org;
                    }
                },[])
            );

        case 'DELETE_ORGANISATION':
            return state.filter(org => {
            if (org.id !== action.id) return true
            })

        default:
            return state;
    }
}