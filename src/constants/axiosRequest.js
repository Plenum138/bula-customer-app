import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './helper';


export const auth_prefix = 'BO ';
export const customHeaders = {
    'Content-Type': 'application/json',
};

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosRequest = axios.create({
    baseURL: BASE_URL,
    headers: customHeaders,
});

axiosRequest.interceptors.request.use(
    async (config) => {

        let userData = {};
        // let userData = await AsyncStorage.getItem('userToken');
        // userData = JSON.parse(userData)

        if (userData?.token) {
            // console.log('config token__________________________________________________', userData.token);
            config.headers.Authorization = 'Bearer ' + userData.token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);



export default axiosRequest;

