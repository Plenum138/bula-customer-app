import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight, windowWidth } from '../constants/helper'
import { useNavigation } from '@react-navigation/native';
const OrderHistory = ({orederDetails}) => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.insideContainer}>
        <Text style={styles.idText}>{orederDetails?.orderId}</Text>
        <Text style={styles.itemText}>{orederDetails?.items} Items</Text>
        <View style={styles.amountBox}>
        <Text style={styles.amountText}>Amount - {orederDetails?.orederAmount} /-</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetailScreen')} style={styles.viewDetailsBtn}>
                <Text style={styles.viewText}>View Details</Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#343D8F',
        marginTop:windowHeight/50,
        height:windowHeight/6,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    insideContainer:{
        width:'90%'
    },
    idText:{
        color:'#F8F8F8',
        fontWeight:'700',
        fontSize:normalizeFont(22)
    },
    itemText:{
        color:'#F8F8F8',
        fontWeight:'400',
        fontSize:normalizeFont(18),
        marginTop:windowHeight/140
    },
    amountBox:{
        marginTop:windowHeight/40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    amountText:{
        color:'#F8F8F8',
        fontWeight:'700',
        fontSize:normalizeFont(22),
        
    },
    viewDetailsBtn:{
        width:windowWidth/3.5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#F8F8F8',
        padding:8
    },
    viewText:{
        color:'#F8F8F8',
        fontWeight:'400',
        fontSize:normalizeFont(16),
    }
})