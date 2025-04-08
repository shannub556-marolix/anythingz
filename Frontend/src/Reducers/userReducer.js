import { USER_LOGIN_FAILED,USER_LOGIN_SUCCESS,USER_LOGIN_LOADING,USER_LOGOUT,USER_TOKEN_EXPIRED } from "../Types/userTypes"

const initialState = {
    loading:false,
    data:[],
    error:'',
    accessToken:false,
    accessTokenId:'',
    //tokenExpiration:'',
}

export const loginUserReducer = (state=initialState,action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
                accessToken:true,
                accessTokenId:action.payload.accessToken,
                //tokenExpiration:action.payload.accessToken.tokenExpiration,
            }
        case USER_LOGIN_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload,
                accessToken:false,
                accessTokenId:'',
                //tokenExpiration:'',
            }

        case USER_LOGOUT: 
            return{
                ...state,
                loading:false,
                data:[],
                error:'',
                accessToken:false,
                accessTokenId:'',
                //tokenExpiration:'',
             }   
        case USER_TOKEN_EXPIRED: 
            return{
                ...state,
                loading:false,
                data:[],
                error:'',
                accessToken:false,
                accessTokenId:'',
                //tokenExpiration:'',
             }  
        default:
            return state
    }
}