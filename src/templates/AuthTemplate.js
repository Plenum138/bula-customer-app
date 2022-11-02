import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, View, Text } from 'react-native';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

const AuthTemplate = () => {
  const [val, setVal] = useState('');

  return (
    <SafeAreaView>
      <View>
        <Text>
          Auth Template
        </Text>
      </View>
    </SafeAreaView>
  );
};



export default AuthTemplate;
