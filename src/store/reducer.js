import {CHANGE_NAME, CHANGE_PHONE} from "./typesList";

const initState = {
    // id: Date.now(),
    name: 'John',
    phone: '35544465',
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case CHANGE_NAME:
            return {...state, name: action.payload}
        case CHANGE_PHONE:
            return {...state, phone: action.payload}

        default:
            return state
    }
}

export default reducer