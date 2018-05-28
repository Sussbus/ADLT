export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL'

export function toggleLogin() {
    return dispatch => {
        dispatch({
            type: 'TOGGLE_LOGIN_MODAL'
        })
    }
}
