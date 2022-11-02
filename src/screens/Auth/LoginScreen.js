import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import MyButton from '../../components/MyButton';
import {normalizeFont} from '../../constants/helper';
import {LoginSchema} from '../../constants/schema';
import {useDispatch} from 'react-redux';
//import * as authActions from '../../store/actions/auth';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextErrorMessage from '../../components/TextErrorMessage';
import {useIsFocused} from '@react-navigation/native';
import * as yup from 'yup';
import MyInput from '../../components/MyInput';
import {windowWidth,windowHeight} from  '../../constants/helper'
import * as authActions from '../../store/auth/action';
const width_proportion = '90%';
const height_proportion = '80%';

const LoginScreen = ({navigation}) => {

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    clearErrors,
    setFocus,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  useEffect(() => {
    clearErrors();
    reset();
  }, [isFocused]);
  const onSubmit = async data => {

    console.log('data--',data );
    dispatch(authActions.login(data));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        <View>
          <Image
            style={styles.image}
            source={require('../.././assets/images/logo_black.png')}
          />
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../.././assets/images/qr.jpeg')}
          />
        </View>
   
        <View style={{marginTop: windowHeight / 20}}>
          <MyInput
            control={control}
            label={'Shop ID'}
            name="shop_id"
            placeholder="Type Shop ID Here"
            keyboardType='numeric' 
         
          />
          <TextErrorMessage error={errors?.shop_id?.message} />
        </View>
        <View style={{marginTop: windowHeight / 20}}>
          <MyInput
            control={control}
            label={'product name'}
            name="product_name"
            placeholder="product name"
          />
          <TextErrorMessage error={errors?.shop_id?.message} />
        </View>
       
      </View>
      
      <View style={styles.box2}>
        <MyButton
          title="Login"
          size={sizes.btn_size_full}
          color={colors.btn_primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
  box1: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height1_withoutTab,
    alignSelf: 'center',
  },
  box2: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height2_withoutTab,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth/3,
    height: windowWidth/3,
    marginTop: windowHeight / 40,
    alignSelf: 'center',
  },
  loginText: {
    textAlign: 'center',
    color: colors.input_text,
    fontSize: normalizeFont(45),
    marginTop: windowHeight / 20,
  },
 
  footerText: {color: colors.input_text, textAlign: 'center', marginTop: 10},
  footerResetText: {
    color: colors.input_text,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
