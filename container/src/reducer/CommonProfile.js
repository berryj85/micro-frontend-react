const initialState = {
    accessToken: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'accessToken':
            return {
                ...state,
                accessToken: action.payload
            }
        default:
            return state
    }
}