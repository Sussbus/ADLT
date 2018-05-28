import { TOGGLE_LOGIN_MODAL } from '../actions/login'

const initialState = {
    loginOpen: false
}

export default function login(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case TOGGLE_LOGIN_MODAL:
            return Object.assign({}, state, {
                ...state,
                loginOpen: !state.loginOpen
            })
        default:
            return state
    }
}
