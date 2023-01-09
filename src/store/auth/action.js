import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosRequest from '../../constants/axiosRequest';
//import snack from '../../components/SnackBar/SnackBar';
//import BASE_URL from '../../config/url';
import {
  authIsLoadingReducer,
  userTokenDataReducer,
  logoutReducer,
} from './reducer';

export const login = paramData => {
  return async dispatch => {
    dispatch(authIsLoadingReducer(true));
    try {
      let {data} = await axiosRequest.post(`customer-login`, paramData);

      dispatch(authIsLoadingReducer(false));
      if (data.status == false) return error(data.message);
      let authData = data?.user;
      authData['token'] = data?.accessToken;

      dispatch(authenticationSaveData(authData));
    } catch (e) {
      console.log('catch error:-', e);
      dispatch(authIsLoadingReducer(false));
    }
  };
};
export const authenticationSaveData = authData => {
  return async dispatch => {
    dispatch(userTokenDataReducer(authData));
    // dispatch({ type: USER_TOKEN_DATA, data: authData })
    await AsyncStorage.setItem('userToken', JSON.stringify(authData));
  };
};

// export const login = payload => {
//   let status = false;
//   console.log('payload_____payload', payload);
//   return async dispatch => {
//     await axiosInstance
//       .post('/user/login', payload)
//       .then(response => {
//         if (response.data.status === 200) {
//           let type = 'login';

//           snack('User login successfully', colors.success);
//           saveUserDataStorage(
//             response.data.accessToken,
//             response.data.user,
//             type,
//           );
//           dispatch(
//             authenticate(response.data.user._id, response.data.accessToken),
//           );

//           status = true;
//         } else {
//           snack(response.data.message, colors.danger);
//         }
//       })
//       .catch(err => {
//         snack('Some Went Wrong', colors.danger);
//       });

//     return status;
//   };
// };

// export const logout = () => {

//   AsyncStorage.removeItem('token');
//   AsyncStorage.removeItem('user');
//   AsyncStorage.removeItem('school');
//   AsyncStorage.removeItem('role');
//   AsyncStorage.removeItem('isNotification');

//   return { type: LOGOUT };

// }
