import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import MyButton from '../../components/MyButton';
import {normalizeFont} from '../../constants/helper';
import {ResetSchema} from '../../constants/schema';
import {useDispatch} from 'react-redux';
//import * as authActions from '../../store/actions/auth';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextErrorMessage from '../../components/TextErrorMessage';
import {useIsFocused} from '@react-navigation/native';
import * as yup from 'yup';
import MyInput from '../../components/MyInput';
const width_proportion = '90%';
import {windowWidth,windowHeight} from  '../../constants/helper'
const ResetPasswordScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    clearErrors,
    setFocus,
  } = useForm({
    resolver: yupResolver(ResetSchema),
  });
  useEffect(() => {
    clearErrors();
    reset();
  }, [isFocused]);

  const onSubmit = async data => {
    console.log('data in reset', data);
    navigation.navigate('OtpScreen')
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
          <View style={{alignSelf:'center'}}>
          <Image
          resizeMode={'contain'}
            style={styles.image}
            source={require('../../assets/images/undraw_secure_login_pdn4(1).png')}
          />
          <Text style={styles.resetText}>RESET PASSWORD</Text>
          <Text style={styles.resetText2}>Kindly Fill Your Mail Address For Reset Password</Text>
          </View>
  
        <View style={{marginTop: windowHeight / 20,}}>

          <MyInput label={'Email'} name="email" control={control} placeholder={'Email Address'} />

          <TextErrorMessage error={errors?.email?.message} />
        </View>
     
        
      </View>
      <View style={styles.box2}>
        <MyButton
          title="SEND"
          size={sizes.btn_size_full}
          color={colors.btn_primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
  box1: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height1,
    alignSelf: 'center',
  },
  box2: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 220,
    height: 180,
    marginTop: windowHeight / 20,
  },
  resetText: {
    color: colors.input_text,
    fontSize: normalizeFont(35),
    marginTop: windowHeight / 20,
  },
  resetText2:{
    color: colors.input_text,
    fontSize: normalizeFont(20),
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.input_text_focus,
    borderRadius: 8,
  },
});
