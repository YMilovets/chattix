const defaultState = {
    listMsg: [],
    listUsers: [],
    session: null
}
export default function chatReduce(state = defaultState, action) {
    switch (action.type) {
        case "SET_USERS":
            return {...state, listUsers: action.payload}
        case "SET_MESSAGES":
            return {...state, listMsg: action.payload}
        default:
            return state
    }
}
