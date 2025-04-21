import axios from 'axios';
import { LOGOUT_TOKEN_EXPIRED, TOKEN_EXPIRED_REFRESH } from '../Actions/userAction';
import { store } from '../store';
// export const API_URL = 'http://192.168.0.145:8080/api';
// export const API_URL = 'http://10.20.53.136:8000/api';
export const API_URL = 'https://prudvi.anythngz.com/apis/api';
let isRefreshing = false;
let failedQueue = [];
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
      if (error) {
          prom.reject(error);
      } else {
          prom.resolve(token);
      }
  });

  failedQueue = [];
};

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = 'Bearer ' + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }
      originalRequest._retry = true;
      isRefreshing = true;
      try {
        await store.dispatch(TOKEN_EXPIRED_REFRESH());
        const newToken = localStorage.getItem('accessToken');
        processQueue(null, newToken);
        isRefreshing = false;

        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;
        store.dispatch(LOGOUT_TOKEN_EXPIRED());
        alert(error.response.data?.error || 'Session expired');
        return Promise.reject(refreshError);
      }
    }
    if (error.response && error.response.status !== 401) {
      alert(error.response.data?.error || 'An error occurred');
    }
    return Promise.reject(error);
  }
);
export const clearAccessToken = () => {
  delete api.defaults.headers.common['Authorization'];
};
export const get = (url, data) => {
  return api.get(url, data);
};
export const post = (url, data) => {
  console.log("Request URL: " + API_URL + url);
  console.log("Request Body: " + JSON.stringify(data));
  // console.log("Request Body: "+JSON.stringify(data));
  // alert('Request Body: \n'+JSON.stringify(data));
  return api.post(url, data);
};

//   export const postImage = async (url, formData, auth = false) => {
//     const headers = {
//         ...(auth && { Authorization: `Bearer ${localStorage.getItem('token')}` }),
//     };

//     return axios.post(url, formData, { 
//         headers,
//         // Let browser set content-type with boundary
//         headers: {
//             ...headers,
//             'Content-Type': 'multipart/form-data',
//         }
//     });
// };

export const postImage = async (url, formData, auth = false) => {
  const fullUrl = url.startsWith('http') ? url : `${API_URL}${url}`;
  const headers = {
    ...(auth && { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }),
  };

  return api.post(fullUrl, formData, {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    }
  });
};

export const remove = (url, data) => {
  console.log("Request URL: " + API_URL + url);
  console.log("Request Body: " + JSON.stringify(data));
  return api.delete(url, data);
};
export const put = (url, data) => {
  console.log("Request URL: " + API_URL + url);
  console.log("Request Body: " + JSON.stringify(data));
  return api.put(url, data);
};
export default api;