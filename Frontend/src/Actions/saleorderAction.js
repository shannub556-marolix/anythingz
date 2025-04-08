import { useState, useEffect } from 'react';
import axios from "axios";
import  { get,post,API_URL } from '../Components/api';
const { SALESORDER_LOADING,SALESORDER_SUCCESS, SALESORDER_FAILED, LOADCUSTOMERS_LOADING, LOADCUSTOMERS_SUCCESS, LOADCUSTOMERS_FAILED } = require("../Types/salesorderTypes");

export const saleorderAction = (values)=> async (dispatch) => {
        try {
            dispatch({ type: SALESORDER_LOADING })
            const { data } = await post('/getsalesitems',values);
            dispatch({ type: SALESORDER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({type:SALESORDER_FAILED,payload:error})
        }
    }

    export const loadcustAction = ()=> async (dispatch) => {
        try {
            dispatch({ type: LOADCUSTOMERS_LOADING })
            const { data } = await get('/loadallcustomers');
            dispatch({ type: LOADCUSTOMERS_SUCCESS, payload: data })
        } catch (error) {
            dispatch({type:LOADCUSTOMERS_FAILED,payload:error})
        }
    }