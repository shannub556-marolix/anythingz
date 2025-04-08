import { useState, useEffect } from 'react';
import axios from "axios";
import  { API_URL } from '../Components/api';
const  { MGMTMILKDATA_FAILED, MGMTMILKDATA_LOADING, MGMTMILKDATA_SUCCESS }  = require("../Types/mgmtmilkTypes");

export const mgmtmilkAction = (values)=> async (dispatch) => {
        try {
            const config = {
                'Content-Type':'application/json',
            }
            const {data} = await axios.post(`${API_URL}/getmgmtmilkdata`,values,config)
            dispatch({type:MGMTMILKDATA_SUCCESS,payload:data})  
        } catch (error) {
            dispatch({type:MGMTMILKDATA_FAILED,payload:error})
        }
    }