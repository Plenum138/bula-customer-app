import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';




export default function ScreenLoader(msg,color ) {
    return (
        Snackbar.show({
            text: msg,
            duration: 2000,
            backgroundColor:color    
          })
    )
}