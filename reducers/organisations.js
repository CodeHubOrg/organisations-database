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
            // return  state.map(org => org.id === action.id ? Object.assign(org, { selected: true}) : org)
            return  state.map(org => {
                if (org.id === action.id) {
                    return Object.assign({}, org, { selected: true})
                }
            })
            break;

        case 'DESELECT_ORGANISATION':
            // return  state.map(org => org.id === action.id ? Object.assign(org, { selected: true}) : org)
            return  state.map(org => {
                if (org.id == action.id) {
                    return Object.assign(org, { selected: false})
                }
            })
            break;

        default:
            return state
    }
}
