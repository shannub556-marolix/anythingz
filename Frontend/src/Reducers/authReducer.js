

const initialState = {
    isLoggedIn:false
}

export const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn:false
            }
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state
    }
}