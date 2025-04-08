import { loginUserReducer } from "./Reducers/userReducer";
// import { authReducer } from "./Reducers/authReducer";
import { loadcustReducer, salesorderReducer } from "./Reducers/salesorderReducer";
import { milkdataReducer } from "./Reducers/mgmtmilkReducer";
import { mgmtsaleReducer } from "./Reducers/mgmtsaleReducer";

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


 const {  applyMiddleware, combineReducers } = require("redux");
 //const { default: thunk } = require("redux-thunk");
const reducers = combineReducers({
    userLogin:loginUserReducer,
    // userauth:authReducer,
    salesorder:salesorderReducer,
    loadcust:loadcustReducer,
    mgmtmilkdata:milkdataReducer,
    mgmtsaledata:mgmtsaleReducer,
})

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['userLogin'],
    accessToken: null,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  export const persistor = persistStore(store);


// export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

