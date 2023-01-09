import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalizeFont, windowHeight, windowWidth} from '../../constants/helper';
import sizes from '../../constants/sizes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import FastImageCaching from '../../components/FastImageCaching';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DashboardScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{justifyContent: 'flex-end'}}
      style={{flex: 1}}>
      <View style={styles.box1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.alignBox}>
            <View style={styles.salesBox}>
              <MaterialCommunityIcons
                name="point-of-sale"
                color="#fff"
                size={25}
              />
              <Text style={styles.salesqty}>15K</Text>
              <Text style={styles.salesText}>Sales</Text>
            </View>
            <View style={styles.ProductsBox}>
              <MaterialCommunityIcons
                name="point-of-sale"
                color="#fff"
                size={25}
              />
              <Text style={styles.salesqty}>15K</Text>
              <Text style={styles.salesText}>Products</Text>
            </View>
          </View>
          <View style={styles.alignBox}>
            <View style={styles.RevenueBox}>
              <MaterialCommunityIcons
                name="point-of-sale"
                color="#fff"
                size={25}
              />
              <Text style={styles.salesqty}>15K</Text>
              <Text style={styles.salesText}>Revenue</Text>
            </View>
            <View style={styles.usersBox}>
              <MaterialCommunityIcons
                name="point-of-sale"
                color="#fff"
                size={25}
              />
              <Text style={styles.salesqty}>15K</Text>
              <Text style={styles.salesText}>Users</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderBox}>
          <Text style={styles.orderText}>Order History</Text>
          <Text style={styles.viewText}>View All</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((items, i) => {
            return (
              <View key={i} style={styles.orderHistoryImageContainer}>
                <View style={styles.historyImageBox}>
                  <FastImageCaching
                    styles={{
                      height: windowWidth / 6,
                      width: windowWidth / 6,
                      borderRadius: windowWidth / 2,
                    }}
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYyOEAgu9nruAYQoHB2glplWBQeYlIyKnPr2ZpXagQbX0jrTaPJKnRisaSjPpqVzJKlQ&usqp=CAU'
                    }
                  />
                  <View style={styles.historyTextBox}>
                    <Text style={styles.historyText}>Riya Kumari</Text>
                    <Text>15000</Text>
                  </View>
                </View>
                <View>
                  <AntDesign name="right" size={20} color="#161617" />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  box1: {
    width: sizes.width_proportion,
    minHeight: windowHeight / 1.7,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  box2: {
    width: windowWidth,
    minHeight: windowHeight / 3,
    alignSelf: 'center',
    //  borderWidth: 1,
    backgroundColor: '#b0b4d9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  salesBox: {
    backgroundColor: '#3a44a0',
    width: windowWidth / 2.3,
    height: windowWidth / 1.8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usersBox: {
    backgroundColor: '#e08f5f',
    width: windowWidth / 2.3,
    height: windowWidth / 1.8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight / 70,
  },

  RevenueBox: {
    backgroundColor: '#3a955d',
    width: windowWidth / 2.3,
    height: windowWidth / 2.2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductsBox: {
    backgroundColor: '#dd5c64',
    width: windowWidth / 2.3,
    height: windowWidth / 2.2,
    borderRadius: 20,
    marginTop: windowHeight / 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignBox: {
    // flexDirection: 'row',
    //  justifyContent: 'space-between',
    marginTop: windowHeight / 35,
  },

  salesqty: {
    color: '#fff',
    fontSize: normalizeFont(25),
    fontWeight: '700',
  },
  salesText: {
    color: '#b0b4d9',
    fontSize: normalizeFont(25),
  },
  orderBox: {
    flexDirection: 'row',
    marginTop: windowHeight / 70,
    justifyContent: 'space-between',
  },
  orderText: {
    fontWeight: '700',
    fontSize: normalizeFont(22),
    color: '#000000',
  },
  viewText: {
    color: '#b0b4d9',
    fontSize: normalizeFont(22),
    fontWeight: '500',
  },
  orderHistoryImageContainer: {
    width: (windowWidth * 9) / 10,
    alignSelf: 'center',
    marginTop: windowHeight / 70,
    justifyContent: 'space-between',
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyImageBox: {
    width: sizes.width_proportion,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  historyTextBox: {
    width: windowWidth / 1.7,
  },
  historyText: {
    fontSize: normalizeFont(22),
    fontWeight: '700',
  },
});
