import AsyncStorage from '@react-native-async-storage/async-storage';
//import snack from '../../components/SnackBar/SnackBar';
//import BASE_URL from '../../config/url';
const LOGIN='login'

export const login=()=>{
    return async dispatch => {
        return  dispatch({ type:LOGIN });
    }
}

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
