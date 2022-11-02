import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import sizes from '../../constants/sizes'
import OrderDetails from '../../components/OrderDetails'
import { normalizeFont, windowHeight } from '../../constants/helper'
const OrderDetailScreen = () => {
    const orderDetails=[
        {
            itemName:'sugar',
            qty:3,
            rate:30,
            totalPrice:90,
        },
        {
            itemName:'sugar',
            qty:3,
            rate:30,
            totalPrice:90,
        },
        {
            itemName:'sugar',
            qty:3,
            rate:30,
            totalPrice:90,
        },
        {
            itemName:'sugar',
            qty:3,
            rate:30,
            totalPrice:90,
        },
       
    ]
  return (
    <ScrollView>
      <View style={styles.box1}>
        {
            orderDetails.map((orederDetails,i)=>{
                return  <OrderDetails key={i} orederDetails={orederDetails} />
            })
        }
     <View style={styles.alignAmount}>
      <Text style={styles.amountText}>TOTAL AMOUNT</Text>
      <Text style={styles.amountText}>360/-</Text>
     </View>
      </View>
    </ScrollView>
  )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    box1: {
        width: sizes.width_proportion,
        alignSelf: 'center',
      },
      amountText:{
        fontSize:normalizeFont(22),
        fontWeight:'700',
        color:'#11141C'
      },
      alignAmount:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:windowHeight/35
      }
})