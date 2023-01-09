import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import colors from '../constants/colors';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import AuthStack from '../navigations/AuthStack';
import AppStack from '../navigations/AppStack';

const AppNavContainer = props => {
  const [isToken, isSetToken] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {!isToken ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
});
export default AppNavContainer;
