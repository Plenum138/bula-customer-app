import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight, windowWidth } from '../constants/helper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FastImageCaching from './FastImageCaching'

let image = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MGBl1IwlL._SX300_SY300_QL70_FMwebp_.jpg"

const Cart = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.imageBox}>
                    <FastImageCaching styles={styles.image} image={image} />
                    {/* <Image style={styles.image} source={image} /> */}
                </View>
            </View>
            <View style={styles.details}>
                <View>
                    <View style={styles.alignPriceText}>
                        <Text style={[styles.itemName, { fontWeight: "700" }]}>khira </Text>
                        <FontAwesome style={{ textAlign: "right", }} size={20} color="lightgreen" name="window-close" />
                    </View>
                    <Text style={{ fontSize: normalizeFont(16), fontWeight: "700" }}>2KG</Text>
                    <View style={[styles.alignPriceText, { marginTop: 10 }]}>
                        <Text style={styles.itemName}>20.00 </Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60, }}>
                            <FontAwesome size={20} color="lightgreen" name="minus-square" />
                            <Text style={{ fontSize: normalizeFont(16), fontWeight: "600", color: "black" }}> 2 </Text>
                            <FontAwesome size={20} color="lightgreen" name="plus-square" />
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        color: '#d3d3d3',
        // minHeight: windowHeight / 6.4,
        flexDirection: 'row',
        //  backgroundColor:'red'
    },
    imageBox: {
        backgroundColor: '#ffffff',
        width: windowWidth / 4,
        height: windowWidth / 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight / 70
    },
    image: {
        width: windowWidth / 10,
        height: windowWidth / 10
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: windowWidth / 4,
        alignItems: 'center',
        marginTop: windowHeight / 140
    },
    qtyText: {
        fontWeight: '900'
    },
    minusBtn: {
        fontWeight: '900',
        color: '#ffffff',
        fontSize: normalizeFont(20)
    },
    details: {
        marginTop: windowHeight / 60,
        paddingLeft: windowWidth / 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth / 1.5
    },
    itemName: {
        fontSize: normalizeFont(20),
        fontWeight: '500',
        color: "black"
    },
    alignPriceText: {
        flexDirection: 'row', justifyContent: 'space-between', width: windowWidth / 1.6
    }
})







// const Cart = () => {
//     return (
//         <View style={styles.container}>
//             <FastImageCaching styles={styles.image} image={image} />

//             <View style={{ paddingVertical: 10 }}>
//                 <Text style={{ fontSize: normalizeFont(18), fontWeight: "600", color: "black" }}> Aata (Aashirwad) </Text>
//                 <Text style={{ fontSize: normalizeFont(16), fontWeight: "600", color: "black" }}> 20 KG </Text>

//                 <Text style={{ fontSize: normalizeFont(16), marginTop: 10, fontWeight: "600", color: "green" }}> 20.00 </Text>
//             </View>
//             <View style={{ paddingVertical: 10 }}>
//                 <FontAwesome style={{ textAlign: "right", }} size={20} color="lightgreen" name="window-close" />

//                 <View style={{ flexDirection: "row", position: "absolute", bottom: 10 }}>
                    // <FontAwesome size={20} color="lightgreen" name="minus-square" />
                    // <Text style={{ fontSize: normalizeFont(16), fontWeight: "600", color: "black" }}> 2 </Text>
                    // <FontAwesome size={20} color="lightgreen" name="plus-square" />
//                 </View>
//             </View>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//     },
//     image: {
//         height: 100,
//         width: 100
//     }
// })
