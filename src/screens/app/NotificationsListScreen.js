import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'
import sizes from '../../constants/sizes'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../../constants/helper'
import Notifications from '../../components/Notifications'
const NotificationsListScreen = () => {
  const notificationData=[
    {
      id:1,
      notificationText:'What is Lorem Ipsum1?',
      notificationDetails:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum,s simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      id:2,
      notificationText:'What is Lorem Ipsum2?',
      notificationDetails:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      id:3,
      notificationText:'What is Lorem Ipsum3?',
      notificationDetails:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
      id:4,
      notificationText:'What is Lorem Ipsum4?',
      notificationDetails:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },

  ]
  const [dataArray,setDataArray]=useState(notificationData)
  const deleteNotification=(id)=>{
    const res=dataArray?.filter((item)=>item.id!==id)
   setDataArray(res)
  }
  
  return (
    <ScrollView>
      <View style={styles.box1}>
        {dataArray.map((data,i)=>{
        
          return  <Notifications key={i} deleteNotification={deleteNotification}  data={data}/>
        })}
      
         
      </View>
    </ScrollView>
  )
}

export default NotificationsListScreen

const styles = StyleSheet.create({
 box1:{
  width: sizes.width_proportion,
  alignSelf: 'center',

 },
 
})