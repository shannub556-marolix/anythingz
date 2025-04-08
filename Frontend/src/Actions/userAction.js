//const { default: axios } = require("axios");
import axios from "axios";
import { post, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
const { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT, USER_LOGIN_LOADING, USER_TOKEN_EXPIRED } = require("../Types/userTypes.js");


export const userAction = (loginPayload) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_LOADING });
        const data = await post('/auth/login', 
            loginPayload
        );
        const accessToken = data.data.authorisation.token;
        // console.log('loginPayload ' + JSON.stringify(
        //     loginPayload
        // ));
        // console.log('User ' + data.data.user);
        if (accessToken === "undefined") {
            dispatch({ type: USER_LOGIN_FAILED });
        }
        else if (accessToken != null && accessToken != "") {
            localStorage.setItem('accessToken', accessToken);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        }
    } catch (error) {
        // console.log('error ' + error);
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
}

export const LOGOUT = () => async (dispatch) => {
    let cleared = false;
    try {
        const response = await post('/auth/logout',{});
        if (response.data.status === "success") {
            cleared= true;
            localStorage.removeItem('accessToken');
            clearAccessToken();
            dispatch({ type: USER_LOGOUT })
            alert('You have been Logged Out');
        } else {
            alert('Unable to Process your Request \n' + response.data);
        }
    } catch (error) {
        alert('Error: ', error.message);
    }
    if(cleared!=true){
        localStorage.removeItem('accessToken');
        clearAccessToken();
        dispatch({ type: USER_LOGOUT })
    }
}
export const LOGOUT_TOKEN_EXPIRED = () => (dispatch) => {
    localStorage.removeItem('accessToken');
    clearAccessToken();
    dispatch({ type: USER_TOKEN_EXPIRED })
}