const initalState = [
    {
        name: 'JavaScript 101',
        selected: false,
        id: 1
    }
]

export default function organisations (state = initalState, action) {
    switch (action.type) {
        case 'SELECT_ORGANISATION':
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, {selected: true})
                }
                return org
            })

        case 'DESELECT_ORGANISATION':
            return  state.map(org => {
                if (org.id == action.id) {
                    return Object.assign(org, {selected: false})
                }
            })
            break;

        case 'ADD_ORGANISATION':
            return state.concat([{
                name: action.name,
                selected: false,
                id: state.length+1
            }])

        case 'EDIT_ORGANISATION':
            return state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, { name: action.name })
                }
                return org
            })

        case 'DELETE_ORGANISATION':
            return state.filter(org => {
                if (org.id !== action.id) return org
            })

        default:
            return state
    }
}
