import axios from "axios";
import { useSelector } from 'react-redux';
import  { post,API_URL } from '../Components/api';
const { MGMTSALEDATA_LOADING,MGMTSALEDATA_SUCCESS, MGMTSALEDATA_FAILED } = require("../Types/mgmtsaleTypes");

export const mgmtsaleAction = (values)=> async (dispatch) => {
        try {
            dispatch({ type: MGMTSALEDATA_LOADING });
            const { data } = await post('/getmgmtsaledata',values);
            dispatch({ type: MGMTSALEDATA_SUCCESS, payload: data })
        } catch (error) {
            dispatch({type:MGMTSALEDATA_FAILED,payload:error})
        }
    }