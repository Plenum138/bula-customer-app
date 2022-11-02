import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight } from '../constants/helper'

const OrderDetials = ({orederDetails}) => {
  return (
    <View style={styles.container}>
      <View style={styles.alignText}>
      <Text style={styles.qtyText}>0{orederDetails?.qty}Kg</Text>
      <Text style={styles.nameText}>{orederDetails?.itemName}<Text style={{fontWeight:'200'}}>@</Text></Text>
      <Text style={styles.rateText}>{orederDetails?.rate} Rs/Kg</Text>
      </View>
    <View
    >
      <Text style={styles.amountText}>Amt {orederDetails?.price} Rs </Text>
    </View>
    </View>
  )
}

export default OrderDetials

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    padding:5,
    paddingLeft:15,
    marginTop:windowHeight/50,
    minHeight:windowHeight/8,
    justifyContent:'center',
    borderRadius:5
  },
  alignText:{
    flexDirection:'row',
  },
  qtyText:{
    fontSize:normalizeFont(22),
    fontWeight:'600',
    color:'#161515'
  },
  nameText:{
    marginLeft:5,
    fontSize:normalizeFont(22),
    fontWeight:'600',
    color:'#161515'
  },
  amountText:{
    marginTop:windowHeight/50,
    fontSize:normalizeFont(22),
    fontWeight:'700',
    color:'#161515'
  },
  rateText:{
    marginLeft:5,
    fontSize:normalizeFont(22),
    fontWeight:'600',
    color:'#161515'
  }
})