import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import colors from './constants/colors';
import useAuth from './hooks/useAuth';
import { Provider } from 'react-redux';
import store from './store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import AppNavContainer from './navigations/index'

import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';
import AuthStack from './navigations/AuthStack';
import AppStack from './navigations/AppStack';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  const isLogin = useAuth();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    
     <Provider store={store}>
     
     <AppNavContainer />
    </Provider>
  
  );
};



export default App;
