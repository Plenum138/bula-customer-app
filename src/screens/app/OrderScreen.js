import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import sizes from '../../constants/sizes'
import OrderHistory from '../../components/OrderHistory'
const OrderScreen = () => {
    const orderDetails=[
        {
            orderId:63254125,
            items:12,
            orederAmount:345,
        },
        {
            orderId:63254126,
            items:15,
            orederAmount:355,
        },
        {
            orderId:63254129,
            items:8,
            orederAmount:455,
        },
        {
            orderId:63254128,
            items:10,
            orederAmount:545,
        }
    ]
  return (
    <ScrollView>
      <View style={styles.box1}>
        {
            orderDetails.map((orederDetails,i)=>{
                return  <OrderHistory key={i} orederDetails={orederDetails}/>
            })
        }
       
      </View>
    </ScrollView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    box1: {
        width: sizes.width_proportion,
        alignSelf: 'center',
      },
})