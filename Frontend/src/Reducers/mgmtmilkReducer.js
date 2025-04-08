//import { createStore } from 'redux';
import { MGMTMILKDATA_FAILED, MGMTMILKDATA_LOADING, MGMTMILKDATA_SUCCESS } from "../Types/mgmtmilkTypes";

const initialState = {
    loading:false,
    data:[],
    error:''
}

export const milkdataReducer = (state=initialState,action) => {
    switch (action.type) {
        case MGMTMILKDATA_LOADING:
            return {
                ...state,
                loading:true
            }
        case MGMTMILKDATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
            }
        case MGMTMILKDATA_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
//const store = createStore(salesorderReducer);