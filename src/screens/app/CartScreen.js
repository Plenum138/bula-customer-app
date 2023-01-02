import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import sizes from '../../constants/sizes'
import Cart from '../../components/Cart'
import { normalizeFont, windowHeight } from '../../constants/helper'
import MyButton from '../../components/MyButton'
import colors from '../../constants/colors'
const CartScreen = () => {

  let data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  const renderItem = ({ item }) => {
    // console.log('item', item)
    return (
      <Cart item={item} />
    )
  }

  return (
    <View style={{ flex: 1, paddingVertical: 10, backgroundColor: "white" }}>

      <Text style={{ textAlign: "center", fontSize: normalizeFont(26), color: "black", fontWeight: "500", }}> My Cart </Text>


      <View style={styles.box1}>


        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
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
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  box1: {
    alignSelf: 'center',
    // backgroundColor: "white",
    // marginVertical: 20,
    height: '70%',
    // paddingVertical: 20,
    // marginBottom: 200
  },
  box2: {
    borderTopWidth: 2,
    borderTopColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    // backgroundColor: "grey"
  },
  alignInfoText: {
    flexDirection: 'row', justifyContent: 'space-between',
  },
  checkhoutHeadingText: {
    fontSize: normalizeFont(18),
    fontWeight: '700',
    color: '#000000'
  },
  keyText: {
    fontSize: normalizeFont(16),
    fontWeight: '500',
    color: '#000000'
  },
  valueText: {
    color: '#000000'
  },
  chechoutBtn: {
    marginTop: windowHeight / 70
  }
})
