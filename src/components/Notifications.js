import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import sizes from '../constants/sizes'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../constants/helper'

const Notifications = ({data,deleteNotification}) => {
    
    // const filterData=()=>{
    //    const res= dataArray?.filter((item,i)=>{
    //         return item.id!==i
    //     })
    //     console.log('res',res)
    // }
  return (
  
      <View style={styles.notificationBox}>
              <View style={styles.alignTextBox}>
              <AntDesign name='checkcircle' size={20} color='green' />
              <View style={styles.textBox}>
              <Text style={styles.notificationName}>{data.notificationText}</Text>
              <Text  style={styles.notificationDetails}>{data.notificationDetails}</Text>
              </View>
              <TouchableOpacity onPress={()=>deleteNotification(data?.id)}>
              <AntDesign name='close' size={20} color='black' />
              </TouchableOpacity>
              </View>
            </View>
  
  )
}

export default Notifications

const styles = StyleSheet.create({
    notificationBox:{
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        marginTop:windowHeight/50
       },
       alignTextBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:6
       
       },
       notificationName:{
        fontWeight:'600',
        fontSize:18,
        includeFontPadding:false,
        color:'#11141C',
       },
       textBox:{
        width:windowWidth*6/9,
        
       },
       notificationDetails:{
        color:'#11141C',
        fontWeight:'400',
       }
      
})