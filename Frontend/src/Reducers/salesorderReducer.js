//import { createStore } from 'redux';
import { SALESORDER_FAILED, SALESORDER_LOADING, SALESORDER_SUCCESS,LOADCUSTOMERS_FAILED,LOADCUSTOMERS_LOADING,LOADCUSTOMERS_SUCCESS } from "../Types/salesorderTypes";

const initialState = {
    loading:false,
    data:[],
    error:''
}

export const salesorderReducer = (state=initialState,action) => {
    switch (action.type) {
        case SALESORDER_LOADING:
            return {
                ...state,
                loading:true
            }
        case SALESORDER_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload.data,
            }
        case SALESORDER_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

const initialloadcustState = {
    custloadingss:false,
    custdata:[],
    custerror:''
}

export const loadcustReducer = (state=initialloadcustState,action) => {
    switch (action.type) {
        case LOADCUSTOMERS_LOADING:
            return {
                ...state,
                custloadingss:true
            }
        case LOADCUSTOMERS_SUCCESS:
            return {
                ...state,
                custloadingss:false,
                custdata:action.payload.data,
            }
        case LOADCUSTOMERS_FAILED:
            return{
                ...state,
                custloadingss:false,
                custerror:action.payload
            }
        default:
            return state
    }
}
//const store = createStore(salesorderReducer);