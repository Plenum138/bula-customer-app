import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { normalizeFont, windowHeight, windowWidth } from '../constants/helper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Cart = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../assets/images/category_img/vegetables/patato.png')} />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <FontAwesome size={27} color="#E08F5F" name="minus-circle" />
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>2</Text>
                    <TouchableOpacity style={styles.btn}>
                        <FontAwesome size={27} color="#E08F5F" name="plus-circle" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={[styles.itemName, { fontWeight: "700" }]}>khira</Text>
                    <View style={styles.alignPriceText}>
                        <Text style={styles.itemName}>Qty: 1</Text>
                        <Text style={styles.itemName}>40.00 rs</Text>
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