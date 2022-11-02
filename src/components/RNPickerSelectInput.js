import React, {useEffect, useState,memo} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Dropdown,MultiSelect} from 'react-native-element-dropdown';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import sizes from '../constants/sizes';
import {windowHeight} from '../constants/helper';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import {useIsFocused} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const RNPickerSelectInput = ({inputName,control, options,selector,Selectorlabel,changeBcColor,}) => {
  




  const [value, setValue] = useState(null);
  
  const isFocused = useIsFocused();
  const [isFocus, setIsFocus] = useState(false);
  
  const renderLabel = () => {
    
    if (!value) {
     
      return <Text style={[styles.label,changeBcColor=='white'?{color:'#11141C'}:{color:colors.input_text_focus}]}>{selector}</Text>;
      
    }
   
  };
 
  

  return (
    <View style={[styles.container,changeBcColor=='white'?{backgroundColor:'white'}:{backgroundColor:colors.body_color}]}>
      <Text style={[styles.input_text,changeBcColor=='white'?{color:'#11141C'}:{color:colors.input_text}]}>{Selectorlabel}</Text> 
       {renderLabel()}
       

       <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, onBlur, value, ref } }) => (
        //   <View style={styles.container}>
        // {renderLabel()}
        <Dropdown
         
          style={[styles.dropdown, isFocus && {borderColor: 'pink'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[styles.selectedTextStyle,changeBcColor=='white'?{color:'#11141C'}:{color:colors.input_text_focus}]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          placeholder={!isFocus ? '' : ''}
          data={options}
          search
          showsVerticalScrollIndicator={false}
          searchPlaceholder="Search..."
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          // onChange={onChange}
          onChange={(value) => {
            setValue(value.value)
            onChange(value.value)

          }}
         
        />
     // </View>
        )}
      />
      
       
      
    </View>
  );
};

export default memo(RNPickerSelectInput);

const styles = StyleSheet.create({
  container: {
  
   
    // padding: 16,
    width: '100%',
    marginBottom: windowHeight / 35,
  },
  dropdown: {
    width: '100%',
    height: Platform.OS == 'ios' ? 58 : 60,
    borderColor: colors.input_text_focus,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    
  },

  label: {
    position: 'absolute',
    color: colors.input_text_focus,
    left: 15,
    top: Platform.OS == 'ios' ? windowHeight / 20 : windowHeight / 19,
    zIndex: 999,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 15,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
   
  },
  input_text: {
    color: colors.input_text,
    fontWeight: '700',
    paddingLeft: 15,
    marginBottom: 5,
  },
  dropdown2: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 20,
    padding: 8,
},
});
