// actions/authActions.js
export const authAction = (values) => (dispatch) => {
    if(values==='LOGIN'){
            dispatch({ type: 'LOGIN' });
    }
    else if (values==='LOGOUT'){
            dispatch({ type: 'LOGOUTT' });
    }
  };
  