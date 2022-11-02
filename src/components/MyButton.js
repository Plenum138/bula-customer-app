import React, {useEffect} from 'react';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {normalizeFont} from '../constants/helper';

const MyButton = props => {
  const navigation = useNavigation();
 
  return (
    <SafeAreaView>
      <TouchableOpacity
    
        onPress={props.onPress}
        style={{
          width: props.size,
          borderRadius: 5,
          backgroundColor: props.color,
          padding: 12,
        }}>
        {props?.IconName ? (
          <Icon
            style={{alignSelf: 'center'}}
            name={props.IconName}
            color="white"
            size={25}
          />
        ) : (
          <Text style={styles.btnText}>{props.title} </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    //borderWidth: 1,
    // borderColor: '#fff',
  },
  btnText: {
    color: colors.btn_secondry,
    textAlign: 'center',
    fontSize: normalizeFont(20),
  },
});

export default MyButton;

// Eample how to use this componant ------

{
  /* <MyButton
title= "Submit"
color="btn_primary"  
onPress = {() => console.log("pressed")}

/>  */
}
