import React, {useEffect, useState} from 'react';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {LoginSchema} from '../constants/schema';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextErrorMessage from './TextErrorMessage';
import {useIsFocused} from '@react-navigation/native';
import * as yup from 'yup';
import {normalizeFont} from '../constants/helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MyInput = props => {
  const {name} = props;
  // const [isFocused, setIsFocused] = useState({
  //   [name]: props.focusState&&props.focusState==true?true:false,

  // })
  const [isFocused, setIsFocused] = useState({
    [name]: false,
  });
  // handlers
  const handleInputFocus = textinput => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = textinput => {
    setIsFocused({
      [textinput]: false,
    });
  };
  useEffect(() => {
    if (props?.reset) {
      console.log('coming');
    }
  }, [isFocused]);
  return (
    <SafeAreaView>
      <Text
        style={[
          styles.labelText,
          props.changeBcColor == 'white'
            ? {color: '#11141C'}
            : {color: colors.input_text},
        ]}>
        {props.label}
      </Text>
      <Controller
        control={props.control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value, ref}}) => (
          //setVal(value),
          <Input
            containerStyle={{paddingHorizontal: 0}}
            multiline={props?.textArea && true}
            numberOfLines={props?.textArea && 4}
            ref={ref}
            returnKeyLabel="go"
            onChangeText={value => {
              props.setKeyWordValue && props.setKeyWordValue(value);
              onChange(value);
            }}
            style={[
              styles.input_style,
              {
                height: props.textArea ? 100 : Platform.OS == 'ios' ? 57 : 58,
                textAlignVertical: 'top',
                paddingTop: 15,
              },
              props.changeBcColor == 'white'
                ? {color: '#11141C'}
                : {color: colors.input_text},
            ]}
            inputContainerStyle={[
              styles.inputContainerStyle,
              {paddingTop: props.textArea && -100},
              props.changeBcColor == 'black'
                ? {borderColor: isFocused[name] ? 'white' : '#D3D3D3'}
                : {borderColor: isFocused[name] ? 'black' : '#D3D3D3'},
            ]}
            value={value}
            placeholder={props.placeholder}
            autoCapitalize="none"
            placeholderTextColor={
              props?.changeBcColor == 'black'
                ? 'white'
                : colors.input_text_focus
            }
            // placeholderTextColor={colors.input_text_focus}
            // placeholderTextColor={isFocused[name] ? "yellow" : "red"}
            keyboardType={props.keyboardType && props.keyboardType}
            maxLength={props.length && props.length}
            onFocus={() => {
              handleInputFocus(props?.name);
            }}
            onBlur={() => {
              handleInputBlur(props?.name);
            }}
            rightIcon={
              props.EyeIcon && (
                <Icon type="material" name="eye" size={24} color="gray" />
              )
            }
          />
        )}
        name={props.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input_style: {
    paddingLeft: 15,
    padding: 15,
    color: colors.input_text_focus,
    fontSize: normalizeFont(16),

    // marginBottom:-10
  },
  labelText: {
    color: colors.input_text,
    fontWeight: '700',
    paddingLeft: 15,
    marginBottom: 5,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.input_text_focus,
    borderRadius: 8,
  },
});

export default MyInput;
