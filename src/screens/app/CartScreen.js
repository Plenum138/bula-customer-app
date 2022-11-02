import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import sizes from '../../constants/sizes'
import Cart from '../../components/Cart'
import { normalizeFont, windowHeight } from '../../constants/helper'
import MyButton from '../../components/MyButton'
import colors from '../../constants/colors'
const CartScreen = () => {
  return (
    <ScrollView>
     <ScrollView  showsVerticalScrollIndicator={false} nestedScrollEnabled={true}  style={styles.box1}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
       
     </ScrollView>  
     <View style={styles.box2}>
      <Text style={styles.checkhoutHeadingText}>Order Info</Text>
      <View style={styles.alignInfoText}>
      <Text style={styles.keyText}>Sub Total</Text>
      <Text style={styles.valueText}>300/-</Text>
      </View>
     
      <View style={styles.alignInfoText}>
      <Text style={styles.keyText}>Shipping Cost</Text>
      <Text style={styles.valueText}>50/-</Text>
      </View>
      <View style={styles.alignInfoText}>
      <Text style={styles.keyText}>Total</Text>
      <Text style={styles.valueText}>350/-</Text>
      </View>
      <View style={styles.chechoutBtn}>
      <MyButton
          title="CHECKOUT (350)"
          size={sizes.btn_size_full}
          color={colors.btn_primary}
        
        />
        </View>
      </View>        
    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  box1: {
    width: sizes.width_proportion,
    alignSelf: 'center',
    maxHeight:windowHeight/1.6
  },
  box2: {
    width: sizes.width_proportion,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  alignInfoText:{
    flexDirection:'row',justifyContent:'space-between', 
  },
  checkhoutHeadingText:{
 fontSize:normalizeFont(18),
 fontWeight:'700',
 color:'#000000'
  },
  keyText:{
    fontSize:normalizeFont(16),
    fontWeight:'500',
    color:'#000000'
  },
  valueText:{
    color:'#000000'
  },
  chechoutBtn:{
    marginTop:windowHeight/70
  }
})
