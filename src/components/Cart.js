import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {normalizeFont, windowHeight, windowWidth} from '../constants/helper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';
const Cart = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../assets/images/category_img/vegetables/patato.png')}
          />
        </View>
      </View>
      <View style={styles.details}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: windowWidth / 1.6,
            }}>
            <View style={{width: windowHeight / 4}}>
              <Text style={[styles.itemName, {fontWeight: '700'}]}>
                parry white label sugar
              </Text>
            </View>
            <View style={styles.removeBtnBox}>
              <Entypo name="cross" size={20} color={colors.btn_primary} />
            </View>
          </View>

          <Text style={styles.itemName}>Qty: 1</Text>
          <View style={styles.alignBtn}>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <FontAwesome size={16} color="#ffffff" name="minus" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>2</Text>
              <TouchableOpacity style={styles.btn}>
                <FontAwesome size={16} color="#ffffff" name="plus" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemName}>40000.00 rs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    color: '#d3d3d3',
    minHeight: windowHeight / 6.4,
    flexDirection: 'row',
    //  backgroundColor:'red'
  },
  imageBox: {
    backgroundColor: '#ffffff',
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight / 70,
  },
  image: {
    width: windowWidth / 4,
    height: windowWidth / 4,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth / 4,
    alignItems: 'center',
  },
  qtyText: {
    fontWeight: '900',
    fontSize: normalizeFont(20),
  },
  minusBtn: {
    fontWeight: '900',
    color: '#ffffff',
    fontSize: normalizeFont(20),
  },
  details: {
    marginTop: windowHeight / 140,
    paddingLeft: windowWidth / 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth / 1.5,
  },
  itemName: {
    fontSize: normalizeFont(16),
    fontWeight: '500',
    color: 'black',
  },
  removeBtnBox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth / 1.6,
    alignItems: 'center',
    marginTop: windowHeight / 35,
  },
});
