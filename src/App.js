import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavContainer from './navigations/index'


const App = () => {

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
