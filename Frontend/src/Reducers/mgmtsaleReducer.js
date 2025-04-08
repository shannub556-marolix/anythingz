//import { createStore } from 'redux';
import { MGMTSALEDATA_FAILED, MGMTSALEDATA_LOADING, MGMTSALEDATA_SUCCESS } from "../Types/mgmtsaleTypes";

const initialState = {
    loading:false,
    data:[],
    error:'',
    isdataloaded:false,
    
}

export const mgmtsaleReducer = (state=initialState,action) => {
    switch (action.type) {
        case MGMTSALEDATA_LOADING:
            return {
                ...state,
                loading:true,
                isdataloaded:false,
            }
        case MGMTSALEDATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload.data,
                error:'',
                isdataloaded:true,
            }
        case MGMTSALEDATA_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload,
                isdataloaded:false,
            }
        default:
            return state
    }
}
//const store = createStore(MGMTSALEDATAReducer);