import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight, windowWidth } from '../constants/helper'
import { ListItem } from 'react-native-elements'


const ProductCard = ({product}) => {
 //   console.log('prod',product)
    const submit=()=>{
       alert('hello')
    }
   
  return (
    <View style={styles.containerBox}>
      <Image style={styles.image} source={product?.uri} />
      <TouchableOpacity style={styles.unitBox}>
            <Text style={styles.unitText}>{product?.productQty}</Text>
      </TouchableOpacity>
      <View style={styles.insideContainerBox}>
        <Text style={styles.itemName}>{product?.productName}</Text>
        <View style={styles.priceBox}>
        <Text style={[styles.orignalPrice,product?.discountPrice&&{textDecorationLine: 'line-through',}]}>{product?.productAmt}.00 <Text >rs</Text></Text>
        <Text style={styles.discountPrice}>{product?.discountPrice}{product?.discountPrice&&'rs'}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={submit} style={styles.addToCart}>
            <Text style={styles.unitText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    containerBox:{
        borderWidth:0.4,
        borderColor:'#d3d3d3',
        width:windowWidth/2,

    },
    image:{
        width:60,
        height:60,
        alignSelf:'center',
        marginTop:windowHeight/140
    },
    unitBox:{
        width:60,
        backgroundColor:'#E08F5F',
        borderRadius:30,
        alignSelf:'center',
        marginTop:windowHeight/140,
        padding:5
    },
    unitText:{
        textAlign:'center',
        color:'#f8f8f8',
        fontSize:normalizeFont(14)
    },
    insideContainerBox:{width:'90%',alignSelf:'center',marginTop:windowHeight/140},
    priceBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemName:{
        fontWeight:'900',
        color:'#11141C'

    },
    orignalPrice:{
        fontWeight:'400',
        color:'#11141C'
    },
    discountPrice:{
        fontWeight:'400',
        color:'#11141C'
    },
    addToCart:{
        backgroundColor:'#DD5C63',
        width:windowWidth/3.5,
        borderRadius:30,
        alignSelf:'center',
        marginTop:windowHeight/70,
        marginBottom:windowHeight/100,
        padding:5
    }
})