export const reducer = (state, action) => {
    if(action.type === "INC") {
        state = state + action.payload
    }
    else {
        state = state - action.payload
    }

    return state
}