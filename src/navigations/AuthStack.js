import React from 'react';
import {Easing, Text} from 'react-native';
import LoginScreen from '../screens/Auth/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import IntroductionScreen from '../screens/Auth/IntroductionScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen'
import OtpScreen from '../screens/Auth/OtpScreen'
//appp

const Stack = createStackNavigator();

function AuthStack({navigation}) {
  return (
 
      <Stack.Navigator  screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="OtpScreen"
          component={OtpScreen}
        />
        
        
      </Stack.Navigator>
 
  );
}

export default AuthStack;
