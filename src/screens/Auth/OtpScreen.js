import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import MyButton from '../../components/MyButton';
import {normalizeFont} from '../../constants/helper';
import {OtpSchema} from '../../constants/schema';
import {useDispatch} from 'react-redux';
//import * as authActions from '../../store/actions/auth';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextErrorMessage from '../../components/TextErrorMessage';
import {useIsFocused} from '@react-navigation/native';
import * as yup from 'yup';
import MyInput from '../../components/MyInput';
import {windowWidth,windowHeight} from  '../../constants/helper'
const width_proportion = '90%';
const OtpScreen = () => {
  const isFocused = useIsFocused();
const [seconds,setSeconds]=useState(25)
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    clearErrors,
    setFocus,
  } = useForm({
    resolver: yupResolver(OtpSchema),
  });
  useEffect(() => {
    clearErrors();
    reset();
  }, [isFocused]);

  const onSubmit = async data => {
    console.log('data in reset', data);
    
  };
  const handleResendOtp = async () => {
    setSeconds(25);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount -1;
      });
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
          <View style={{alignSelf:'center'}}>
          <Image
          resizeMode={'contain'}
            style={styles.image}
            source={require('../../assets/images/undraw_secure_login_pdn4(1).png')}
          />
          <Text style={styles.otpText}>OTP VERIFIACTION</Text>
          <Text style={styles.otpText2}>Kindly Fill 4 Digit OTP Verification</Text>
          </View>
          
        <View style={{marginTop: windowHeight / 20}}>

          <MyInput  length={4} keyboardType='numeric' label={'OTP'} name="otp" control={control} placeholder={'4 Digit OTP Here'} />

          <TextErrorMessage error={errors?.otp?.message} />
        </View>
        
      </View>
      <View style={styles.box2}>
      {seconds > 0 ? (
            <TouchableOpacity
             >
              <Text style={styles.resendTime}>00:{seconds<10?`0${seconds}`:seconds}</Text>
              </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handleResendOtp();
              }}>
              <Text style={styles.resendTimeText}>
                
                Resend Code
              </Text>
              <View style={styles.textUnderline} />
            </TouchableOpacity>
          )
          }
       

        <MyButton
          title="CONTINUE"
          size={sizes.btn_size_full}
          color={colors.btn_primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
  box1: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height1,
    alignSelf: 'center',
    //   borderWidth: 1,
    //  borderColor: 'white',
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
  otpText: {
    color: colors.input_text,
    fontSize: normalizeFont(35),
    marginTop: windowHeight / 20,
  },
otpText2:{
    color: colors.input_text,
    fontSize: normalizeFont(20),
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.input_text_focus,
    borderRadius: 8,
  },
  timeText:{
    color:colors.input_text
  },
  resendTime:{color: 'white',textAlign:'center',marginBottom:10},
  resendTimeText:{
    color:colors.input_text,
    textAlign:'center'
  },
  textUnderline: {
    height: 0,
    width: 82,
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginBottom: 10,
    alignSelf:'center'
  },
});
