import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { normalizeFont } from '../constants/helper';
import sizes from '../constants/sizes';
import colors from '../constants/colors';
import { windowHeight,windowWidth } from '../constants/helper';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
const AlertBox = ({setVisible,screenName,message,visible,closeSheet}) => {
    const navigation = useNavigation();
  return (
    <View>
       <Overlay isVisible={visible} overlayStyle={[styles.overlayStyle]}>
      <Icon style={{alignSelf:'center'}} name='checkcircle' color='green' size={30 }/>
      <Text style={styles.overLayText}>{message}</Text>
      <TouchableOpacity onPress={()=> {
        setVisible(false)
        closeSheet&& closeSheet()
       screenName&& navigation.navigate(screenName)
      }} style={styles.overLayButton}>
        <Text style={styles.overLayBottonText} >Continue</Text>
      </TouchableOpacity>
      </Overlay>
    </View>
  )
}

export default AlertBox

const styles = StyleSheet.create({
    overlayStyle:{ width: "80%",
  padding: 10,
  borderRadius: 5,
  backgroundColor: "#F8F8F8",},
  
  overLayText:{textAlign:'center',
  fontSize:normalizeFont(22),
  fontWeight:'500',
  color:'#161515',
marginTop:15},
  overLayButton:{
    width:windowWidth/4,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    marginVertical:15,
    alignSelf:'center',
  },
  overLayBottonText:{color:'#11141C'}
})