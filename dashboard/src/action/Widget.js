export const loadAllWidget = (widgets) => async dispatch => {
    dispatch({
        type: "LoadAllWidget",
        payload: widgets 
    })
}