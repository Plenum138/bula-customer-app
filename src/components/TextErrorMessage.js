import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TextErrorMessage({error, customMarignLeft,smallText,changeBcColor }) {
  const CapitalizeFirstLetter = str => {
    return str?.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  };

  return (
    <View>
      {error && (
        <View
          style={{
            marginTop: -20,
           // marginLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialIcons color="orange" size={14} name="error" />
          <Text style={[styles.errMsg,{fontSize:smallText?10:14,color:changeBcColor=='white'?'black':colors.input_text_focus}]}> {CapitalizeFirstLetter(error)} </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errMsg: {
    color: 'white',
    
  },
  errorIcon: {},
});
