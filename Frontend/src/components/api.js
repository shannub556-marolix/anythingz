import axios from 'axios';
import { LOGOUT_TOKEN_EXPIRED } from '../Actions/userAction';
import { store } from '../store';
// export const API_URL = 'http://192.168.0.145:8080/api';
// export const API_URL = 'http://10.20.53.136:8000/api';
export const API_URL = 'https://prudvi.anythngz.com/apis/api';
const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  api.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = 'Bearer '+accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      //refrsh token hit 
      //new refresh token
      //new token
      //save local storage
      //once hit
      // Handle 401 Unauthorized error
      store.dispatch(LOGOUT_TOKEN_EXPIRED())
      alert(error.response.data.error);
    }
    else if(error.response && error.response.status !== 401){
      alert(error.response.data.error)
    }
    return Promise.reject(error);
  }
);
  export const clearAccessToken = () => {
    delete api.defaults.headers.common['Authorization'];
  };
  export const get = (url,data) => {
    return api.get(url,data);
  };
  export const post = (url, data) => {
    console.log("Request URL: "+API_URL+url);
    console.log("Request Body: "+JSON.stringify(data));
    // console.log("Request Body: "+JSON.stringify(data));
    // alert('Request Body: \n'+JSON.stringify(data));
    return api.post(url, data);
  };
  export const remove = (url, data) => {
    console.log("Request URL: "+API_URL+url);
    console.log("Request Body: "+JSON.stringify(data));
    return api.delete(url, data);
  };
  export const put = (url, data) => {
    console.log("Request URL: "+API_URL+url);
    console.log("Request Body: "+JSON.stringify(data));
    return api.put(url, data );
  };
  export default api;