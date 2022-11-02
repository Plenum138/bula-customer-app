import {StyleSheet, Text, TouchableOpacity, View, I} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import sizes from '../../constants/sizes';
import colors from '../../constants/colors';
import {normalizeFont, windowHeight, windowWidth} from '../../constants/helper';
import ProductCard from '../../components/ProductCard';
import AntDesign from 'react-native-vector-icons/AntDesign'
const ProductListScreen = () => {
  // const buttonLink=['fruits','vegetables']
  const [index, setIndex] = useState(0);
  // console.log('index',index)
  if ('back end response like this') {
    // const vegetableProduct = [
    //     {
    //         vegetables:  [
    //             {
    //               uri: require('../../assets/images/category_img/vegetables/ladyfinger.png'),
    //               productQty: '2Kg',
    //               productName: 'Lady Finger',
    //               productAmt: 40.00,
    //               discountPrice:30.00,
    //               type:'vegetables'
    //             },
    //             {
    //               uri: require('../../assets/images/category_img/vegetables/patato.png'),
    //               productQty: '5Kg',
    //               productName: 'Patato',
    //               productAmt: 30.00,
    //               discountPrice:25.00,
    //               type:'vegetables'
    //             },
    //             {
    //               uri: require('../../assets/images/category_img/vegetables/tomato.png'),
    //               productQty: '2Kg',
    //               productName: 'Tomato',
    //               productAmt: 50.00,
    //               type:'vegetables'
    //             },
    //         ],
    //         fruits: [
    //             {
    //                 uri: require('../../assets/images/category_img/fruits/santra.jpeg'),
    //                 productQty: '1Kg',
    //                 productName: 'Orange',
    //                 productAmt: 40.00,
    //                 type:'fruits'

    //               },
    //               {
    //                 uri: require('../../assets/images/category_img/fruits/download.jpeg'),
    //                 productQty: '6Kg',
    //                 productName: 'Mango',
    //                 productAmt: 170.00,
    //                 type:'fruits'

    //               },
    //               {
    //                 uri: require('../../assets/images/category_img/fruits/angoor.jpeg'),
    //                 productQty: '4Kg',
    //                 productName: 'grappes',
    //                 productAmt: 80.00,
    //               discountPrice:60.00,
    //               type:'fruits'
    //               },
    //         ],

    //     }

    //   ];

    'we will run this type of code' ==
      {
        /* {vegetableProduct.map((item)=>{
        return item[`${buttonLink[index]}`].map((productItem)=>{
             return  <ProductCard product={productItem} />
         })
         
     })} */
      };
  }

  const vegetableProduct = [
    {
      uri: require('../../assets/images/category_img/vegetables/ladyfinger.png'),
      productQty: '2Kg',
      productName: 'Lady Finger',
      productAmt: 40.0,
      discountPrice: 30.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/patato.png'),
      productQty: '5Kg',
      productName: 'Patato',
      productAmt: 30.0,
      discountPrice: 25.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/tomato.png'),
      productQty: '2Kg',
      productName: 'Tomato',
      productAmt: 50.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/ladyfinger.png'),
      productQty: '2Kg',
      productName: 'Lady Finger',
      productAmt: 40.0,
      discountPrice: 30.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/patato.png'),
      productQty: '5Kg',
      productName: 'Patato',
      productAmt: 30.0,
      discountPrice: 25.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/tomato.png'),
      productQty: '2Kg',
      productName: 'Tomato',
      productAmt: 50.0,
      type: 'vegetables',
    },

    {
      uri: require('../../assets/images/category_img/fruits/santra.jpeg'),
      productQty: '1Kg',
      productName: 'Orange',
      productAmt: 40.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/download.jpeg'),
      productQty: '6Kg',
      productName: 'Mango',
      productAmt: 170.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/angoor.jpeg'),
      productQty: '4Kg',
      productName: 'grappes',
      productAmt: 80.0,
      discountPrice: 60.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/download.jpeg'),
      productQty: '6Kg',
      productName: 'Mango',
      productAmt: 170.0,
      type: 'drinks',
    },
    {
      uri: require('../../assets/images/category_img/fruits/angoor.jpeg'),
      productQty: '4Kg',
      productName: 'grappes',
      productAmt: 80.0,
      discountPrice: 60.0,
      type: 'dairy',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/ladyfinger.png'),
      productQty: '2Kg',
      productName: 'Lady Finger',
      productAmt: 40.0,
      discountPrice: 30.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/patato.png'),
      productQty: '5Kg',
      productName: 'Patato',
      productAmt: 30.0,
      discountPrice: 25.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/tomato.png'),
      productQty: '2Kg',
      productName: 'Tomato',
      productAmt: 50.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/ladyfinger.png'),
      productQty: '2Kg',
      productName: 'Lady Finger',
      productAmt: 40.0,
      discountPrice: 30.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/patato.png'),
      productQty: '5Kg',
      productName: 'Patato',
      productAmt: 30.0,
      discountPrice: 25.0,
      type: 'vegetables',
    },
    {
      uri: require('../../assets/images/category_img/vegetables/tomato.png'),
      productQty: '2Kg',
      productName: 'Tomato',
      productAmt: 50.0,
      type: 'vegetables',
    },

    {
      uri: require('../../assets/images/category_img/fruits/santra.jpeg'),
      productQty: '1Kg',
      productName: 'Orange',
      productAmt: 40.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/download.jpeg'),
      productQty: '6Kg',
      productName: 'Mango',
      productAmt: 170.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/angoor.jpeg'),
      productQty: '4Kg',
      productName: 'grappes',
      productAmt: 80.0,
      discountPrice: 60.0,
      type: 'fruits',
    },
    {
      uri: require('../../assets/images/category_img/fruits/download.jpeg'),
      productQty: '6Kg',
      productName: 'Mango',
      productAmt: 170.0,
      type: 'drinks',
    },
    {
      uri: require('../../assets/images/category_img/fruits/angoor.jpeg'),
      productQty: '4Kg',
      productName: 'grappes',
      productAmt: 80.0,
      discountPrice: 60.0,
      type: 'dairy',
    },
  ];

  const filterButton = vegetableProduct.reduce((acc, cur) => {
    acc.push(cur.type);
    return acc;
  }, []);

  const buttonLink = [...new Set(filterButton)];
  console.log('btnlink',buttonLink)
  const fil = vegetableProduct.filter(item => {
    return item.type == `${buttonLink[index]}`;
  });

  return (
    <View style={{flex: 1}}>
      <View style={styles.box1}>
        <Text style={styles.headingText}>Vegetables</Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
          horizontal={true}>
          {buttonLink.map((link, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  style={[
                    styles.linkBtn,
                    i == index
                      ? {backgroundColor: '#3A44A0'}
                      : {backgroundColor: 'white'},
                  ]}
                  onPress={() => setIndex(i)}>
                  <Text
                    style={[
                      styles.linkTxt,
                      i == index ? {color: 'white'} : {color: '#707070'},
                    ]}>
                    {link}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: windowHeight / 70,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {fil.map((filterItem, i) => {
            return <ProductCard key={i} product={filterItem} />;
          })}
        </View>
        
      </ScrollView>
      <View style={styles.popUp}>
          <View>
          <Text style={styles.popUpText}>1 Item</Text>
          <Text style={styles.popUpText}>40/-</Text>
          </View>
          <View style={styles.alignText}>
            <Text style={styles.popUpText} >View Cart</Text>
            <AntDesign style={styles.icon} name='arrowright' size={20} color='white' />
          </View>
        </View>
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_color,
  },
  box1: {
    width: sizes.width_proportion,
    alignSelf: 'center',
  },
  box2: {
    width: sizes.width_proportion,
    minHeight: sizes.box_height2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  linkBtn: {
    width: windowWidth / 4,
    backgroundColor: '#3A44A0',
    padding: 10,
    marginLeft: 15,
    borderRadius: 30,
    marginBottom: windowHeight / 70,
  },
  linkTxt: {
    textAlign: 'center',
    color: '#F8F8F8',
  },
  headingText: {
    textAlign: 'center',
    marginBottom: windowHeight / 35,
    marginTop: windowHeight / 70,
    fontSize: normalizeFont(22),
    fontWeight: '700',
  },
  popUp:{
    backgroundColor:'#3A955D',
   minHeight:windowHeight/15,
   padding:10,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
  
  },
  popUpText:{
    color:'#ffffff',
    fontWeight:'600'
  },
  alignText:{
    flexDirection:'row'
  },
  icon:{
    marginLeft:5
  }
});
