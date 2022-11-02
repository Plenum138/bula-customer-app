import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../constants/helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const OrderCard = ({status}) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartBox1}>
        <Text style={styles.nameText}>Mahesh Kumar</Text>
        <Text style={styles.orderId}>8888888888</Text>
        <Text style={[styles.nameText, {marginTop: 10}]}>50,000/-</Text>
        <Text style={{fontWeight: '400'}}>credit</Text>
        <View style={styles.paidBox}>
          <Text style={styles.paidText}>{status}</Text>
          {status==='Paid'? <Icon
            style={{marginLeft: 5}}
            name="checkcircle"
            size={20}
            color="#3A955D"
          />: <MaterialIcons
          style={{marginLeft: 5}}
          name="watch-later"
          size={20}
          color="#Ff9494"
        />}
         
        </View>
      </View>
      <View style={styles.cartBox2}>
        <Text style={styles.dateString}>05-09-2022</Text>
        <TouchableOpacity style={styles.detailButton}>
            <Text style={{color:colors.input_text}}>Details</Text>
            <Icon name='arrowright' size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: '#ffffff',
   // padding: 10,
    borderRadius:10,
    flexDirection:'row',
    marginTop:windowHeight/50
  },
  nameText: {
    fontWeight: '700',
  },
  orderId: {color: colors.detail_text_color},
  paidBox: {
    flexDirection: 'row',
   // justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  paidText:{color:'#3A955D',fontWeight:'700'},
  cartBox1:{width:'70%',padding:10},
  cartBox2:{width:'30%',justifyContent:'space-between',padding:5},
  dateString:{
    fontWeight:'700',
    textAlign:'center'
  },
  detailButton:{flexDirection:'row',backgroundColor:"#000000",alignItems:'center',justifyContent:'space-around',padding:5,borderRadius:5}
});
