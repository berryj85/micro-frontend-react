const initialState = {
    widgets: [],
    activeWidgets: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LoadAllWidget':
            return {
                ...state,
                widgets: action.payload
            }
        default:
            return state
    }
}