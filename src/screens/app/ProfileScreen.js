import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import sizes from '../../constants/sizes'
import { normalizeFont, windowHeight, windowWidth } from '../../constants/helper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileDetailsBox from '../../components/ProfileDetailsBox'

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.box1}>
        <View style={styles.container}>
          <Image resizeMode='center' style={styles.image} source={require('../../assets/images/profile.webp')} />
         <Text style={styles.profileName}>Amit Kumar</Text>
         <Text style={[styles.profileName,{fontWeight:'300'}]}>+91-9548563210</Text>
         <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
            <MaterialCommunityIcons name='logout' size={20} color='#11141C'/>
         </TouchableOpacity>
        </View>
        <View style={styles.aboutBox}>
        <ProfileDetailsBox qty={3200} aboutName={'Total Creditors'}/>
        <ProfileDetailsBox qty={1700} aboutName={'Aval. Creditors'}/>
        <ProfileDetailsBox qty={32} aboutName={'Order History'} icon={true}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  box1: {
    width: sizes.width_proportion,
  
    alignSelf: 'center',
  },
  image:{
    width:windowWidth/4,
    height:windowWidth/4,
    borderRadius:windowWidth/2,
    marginTop:windowHeight/35,
  },
  profileName:{
    color:'#161515',
    fontSize:normalizeFont(22),
    fontWeight:'500',
    marginTop:windowHeight/240
  },
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  logoutButton:{
    width:windowWidth/3,
    padding:6,
    borderRadius:30,
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:windowHeight/70
  },
  logoutText:{
    color:'#11141C'
  },
  aboutBox:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  }
})