import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {normalizeFont, windowHeight, windowWidth} from '../../constants/helper';
import FastImageCaching from '../../components/FastImageCaching';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
const HomeScreen = ({navigation}) => {
  const [inputs, setInputs] = useState({
    text: '',
  });
  const categoryLists = [
    {
      categoryName: 'Salt & Sugar',
      uri: '../assets/images/category_img/vegetables/ctgy_img_1.png',
      id: 1,
    },
    {
      id: 2,
      categoryName: 'Vegetables & Fruits',
      uri: '../assets/images/category_img/ctgy_img_2.png',
    },
    {
      id: 3,
      categoryName: 'Dairy, Bread & Eggs',
      uri: '../.././assets/images/category_img/ctgy_img_3.png',
    },
    {
      id: 4,
      categoryName: 'Tea, Coffee & health Drinks',
      uri: '../.././assets/images/category_img/ctgy_img_4.png',
    },
    {
      id: 5,
      categoryName: 'Masala, oil & More',
      uri: '../.././assets/images/category_img/ctgy_img_5.png',
    },
    {
      id: 5,
      categoryName: 'Aata, Rice & Dal',
      uri: '../.././assets/images/category_img/ctgy_img_6.png',
    },
    {
      id: 6,
      categoryName: 'Personal Care',
      uri: '../.././assets/images/category_img/ctgy_img_7.png',
    },
    {
      id: 7,
      categoryName: 'Personal Care',
      uri: '../.././assets/images/category_img/ctgy_img_7.png',
    },
  ];
  const feateredProducts = [
    {
      categoryName: 'Salt & Sugar',
      uri: '../assets/images/category_img/ctgy_img_1.png',
      id: 1,
    },
    {
      id: 2,
      categoryName: 'Vegetables & Fruits',
      uri: '../.././assets/images/category_img/ctgy_img_2.png',
    },
    {
      id: 3,
      categoryName: 'Dairy, Bread & Eggs',
      uri: '../.././assets/images/category_img/ctgy_img_3.png',
    },
    {
      id: 4,
      categoryName: 'Tea, Coffee & health Drinks',
      uri: '../.././assets/images/category_img/ctgy_img_4.png',
    },
  ];
  return (
    <ScrollView>
      <View style={styles.box1}>
        <View>
          {/* <View style={styles.headContainer}>
            <FastImageCaching
              styles={{borderRadius: 50, height: 50, width: 50}}
              image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYyOEAgu9nruAYQoHB2glplWBQeYlIyKnPr2ZpXagQbX0jrTaPJKnRisaSjPpqVzJKlQ&usqp=CAU'
              }
            />
            <Text style={styles.headText}> Welcome, Amit </Text>
          </View> */}

          <View style={styles.insideContainer}>
            <Text style={styles.shopText1}>HEY,RAHUL</Text>
            <Text style={styles.shopText2}>Find Your Product</Text>
          </View>
          <View style={styles.alignSearchInput}>
            <SearchInput
              microphone={true}
              inputs={inputs}
              setInputs={setInputs}
            />
            <View style={styles.enterBtn}>
              <Icon
                name="distribute-vertical-center"
                color="#ffffff"
                size={16}
              />
            </View>
          </View>
        </View>
        <View style={styles.alignCategory}>
          <Text style={styles.category}>Categories</Text>
          <Text style={styles.viewText}>View All</Text>
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          style={{maxHeight: windowHeight / 6, minHeight: windowHeight / 6}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: windowHeight / 70,
            }}>
            {categoryLists.map((items, i) => {
              return (
                <View key={i} style={styles.imageContainer}>
                  <View style={[styles.imageBox]}>
                    <FastImageCaching
                      styles={{height: 50, width: 50}}
                      image={items.uri}
                    />
                  </View>
                  <Text
                    style={{
                      width: windowWidth / 5.5,
                      fontSize: normalizeFont(14),
                      textAlign: 'center',
                      fontWeight: '700',
                    }}>
                    {items.categoryName}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View>
          <View style={styles.alignCategory}>
            <Text style={styles.category}>Featured Products</Text>
            <Text style={styles.viewText}>View All</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              // width: windowWidth,
            }}>
            {feateredProducts.map((feateredItem, i) => {
              return (
                <View key={i} style={styles.featuredImageContainer}>
                  <View style={styles.featuredImageBox}>
                    <View style={styles.heartIcon}>
                      <Entypo name="heart-outlined" size={20} color={'red'} />
                    </View>
                    <FastImageCaching
                      styles={{
                        width: windowWidth / 2.3,
                        height: windowWidth / 4,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}
                      isNotContain={true}
                      image={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYyOEAgu9nruAYQoHB2glplWBQeYlIyKnPr2ZpXagQbX0jrTaPJKnRisaSjPpqVzJKlQ&usqp=CAU'
                      }
                    />

                    <View style={styles.imageTextBox}>
                      <Text style={styles.feateredText}>Dawat Rice</Text>
                      <Text style={styles.priceText}>
                        ₹ 351 <Text style={styles.perKgPrice}>(79/kg)</Text>
                      </Text>
                    </View>
                    <View style={styles.drowBorderLine}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: windowHeight / 30,
                      }}>
                      <Fontisto
                        name="shopping-basket"
                        color="#848ac4"
                        size={18}
                      />
                      <Text style={styles.addToCartText}>Add To Cart</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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
  headText: {
    fontSize: normalizeFont(24),
    color: 'black',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  insideContainer: {
    marginTop: windowHeight / 70,
    marginBottom: windowHeight / 35,
  },
  shopText1: {
    color: '#000000',
    fontSize: normalizeFont(22),
    marginLeft: windowWidth / 70,
    fontWeight: '700',
  },
  shopText2: {
    color: '#b7b8ba',
    fontSize: normalizeFont(18),
    marginLeft: windowWidth / 70,
  },

  imageContainer: {
    alignItems: 'center',
    width: windowWidth / 4,
  },
  imageBox: {
    backgroundColor: '#d9daec',
    width: windowWidth / 5,
    height: windowWidth / 5,
    borderRadius: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  category: {
    color: '#000000',
    fontSize: normalizeFont(24),
    fontWeight: '700',
  },
  alignSearchInput: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  enterBtn: {
    backgroundColor: '#4e57aa',
    width: windowWidth / 7,
    height: windowWidth / 7,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewText: {
    color: '#5b64b0',
    fontSize: normalizeFont(22),
  },
  featuredImageContainer: {
    marginTop: windowHeight / 70,
  },
  featuredImageBox: {
    width: windowWidth / 2.3,
    height: windowWidth / 2.1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  imageTextBox: {
    padding: 5,
  },
  feateredText: {
    color: '##8c8d91',
    fontSize: normalizeFont(18),
    fontWeight: '500',
  },
  priceText: {
    color: '#c7e6d1',
  },
  perKgPrice: {
    color: '#8c8d91',
    fontSize: normalizeFont(14),
  },
  drowBorderLine: {
    width: windowWidth / 2.3,
    borderWidth: 0.5,
    borderColor: '#dedede',
  },
  addToCartText: {
    marginLeft: 5,
    color: '#848ac4',
  },
  heartIcon: {
    width: windowWidth / 13,
    height: windowWidth / 13,
    borderRadius: windowWidth / 2,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: windowHeight / 6.3,
    top: windowHeight / 140,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
