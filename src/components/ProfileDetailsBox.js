import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight, windowWidth } from '../constants/helper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const ProfileDetailsBox = ({qty,aboutName,icon}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={()=>{
        if(aboutName=='Order History'){
            navigation.navigate('OrderScreen')
        }
    }} style={styles.containerBox}>
    
        <Text style={styles.qtyText}>{qty}</Text>
        <View style={styles.alignText}>
        <Text style={styles.aboutName}>{aboutName}</Text>
        {icon&&<Icon style={styles.icon} name="arrowright" size={18} color="#F8F8F8" />}
        </View>
    
    </TouchableOpacity>
  )
}

export default ProfileDetailsBox

const styles = StyleSheet.create({
    containerBox:{
        backgroundColor:'#343D8F',
        width:windowWidth/2.5,
        height:windowHeight/6.5,
        borderRadius:10,
        padding:15,
        justifyContent:'flex-end',
        marginTop:windowHeight/35
    },
    qtyText:{
        color:'#F8F8F8',
        fontWeight:'600',
        fontSize:normalizeFont(22)
    },
    aboutName:{
        color:'#F8F8F8',
        fontWeight:'400',
        fontSize:normalizeFont(16)
    },
    alignText:{
        flexDirection:'row',
        alignItems:'center',

    },
    icon:{
        marginLeft:10
    }
})