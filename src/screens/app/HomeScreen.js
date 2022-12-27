import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import SearchInput from '../../components/SearchInput'
import colors from '../../constants/colors'
import sizes from '../../constants/sizes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { normalizeFont, windowHeight, windowWidth } from '../../constants/helper'
import FastImageCaching from '../../components/FastImageCaching'
const HomeScreen = ({ navigation }) => {

  const [inputs, setInputs] = useState({
    text: "",
  });
  const categoryLists = [
    {
      categoryName: 'Salt & Sugar',
      uri: require('../.././assets/images/category_img/ctgy_img_1.png'),
    },
    {
      categoryName: 'Vegetables & Fruits',
      uri: require('../.././assets/images/category_img/ctgy_img_2.png'),
    },
    {
      categoryName: 'Dairy, Bread & Eggs',
      uri: require('../.././assets/images/category_img/ctgy_img_3.png'),
    },
    {
      categoryName: 'Tea, Coffee & health Drinks',
      uri: require('../.././assets/images/category_img/ctgy_img_4.png'),
    },
    {
      categoryName: 'Masala, oil & More',
      uri: require('../.././assets/images/category_img/ctgy_img_5.png'),
    },
    {
      categoryName: 'Aata, Rice & Dal',
      uri: require('../.././assets/images/category_img/ctgy_img_6.png'),
    },
    {
      categoryName: 'Personal Care',
      uri: require('../.././assets/images/category_img/ctgy_img_7.png'),
    },
    {
      categoryName: 'Personal Care',
      uri: require('../.././assets/images/category_img/ctgy_img_7.png'),
    },
  ];
  return (
    <View >
      <View style={styles.box1}>
        <View>
          <View style={styles.headContainer}>
            <FastImageCaching styles={{ borderRadius: 50, height: 50, width: 50 }} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYyOEAgu9nruAYQoHB2glplWBQeYlIyKnPr2ZpXagQbX0jrTaPJKnRisaSjPpqVzJKlQ&usqp=CAU"} />
            <Text style={styles.headText}>  Welcome, Amit </Text>
          </View>

          <View style={styles.insideContainer}>
            <Icon style={styles.icon} name='storefront' size={23} color='#3A44A0' />
            <Text style={styles.shopText}>Shyam Kirana Store Check</Text>
          </View>

          <SearchInput microphone={true} inputs={inputs} setInputs={setInputs} />
        </View>
        <ScrollView>
          <View style={styles.product_container}>
            {categoryLists.map((item, index) => (
              <View style={styles.product_box} key={index}>
                {/* Product Image Start Here */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductListScreen')}
                >
                  <View style={styles.product_img_box}>
                    <Image
                      source={item.uri}
                      style={{
                        width: windowWidth / 5,
                        height: windowWidth / 5,
                      }}
                    />
                  </View>
                  {/* Product Image Ends Here */}
                </TouchableOpacity>
                {/* Product Name Start Here */}
                <View style={{ width: windowWidth / 5, marginBottom: windowHeight / 70 }}>
                  <Text numberOfLines={2} style={styles.product_name}>
                    {item.categoryName}
                  </Text>
                </View>
                {/* Product Name Ends Here */}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
  box1: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height1_withoutTab,
    alignSelf: 'center',
  },
  box2: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height2_withoutTab,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headText: { fontSize: normalizeFont(24), color: 'black', fontWeight: "600", textTransform: "capitalize" },
  insideContainer: {
    marginTop: windowHeight / 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight / 35
  },
  shopText: {
    color: '#3A44A0',
    fontSize: normalizeFont(22),
    marginLeft: windowWidth / 70
  },
  icon: {
    paddingLeft: 15
  },
  headContainer: { paddingVertical: 10, flexDirection: "row", alignItems: "center" },
  product_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  product_img_box: {
    borderRadius: 8,
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'center',
    backgroundColor: '#D0D2E5',
  },
  product_name: {
    fontSize: 12,
    color: '#161515',
    fontWeight: 'bold',
    letterSpacing: 0.27,
    fontWeight: 'bold',
    lineHeight: 18,
  },
})