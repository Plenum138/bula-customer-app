import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import sizes from '../../constants/sizes';
import {normalizeFont, windowHeight, windowWidth} from '../../constants/helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileDetailsBox from '../../components/ProfileDetailsBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
const image = {uri: 'https://reactjs.org/logo-og.png'};

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.box1}>
        <View>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            source={require('../../assets/images/backgroundImage.png')}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <View style={styles.container}>
              <Image
                resizeMode="center"
                style={styles.image}
                source={require('../../assets/images/profile.webp')}
              />
              <Text style={styles.profileName}>Amit Kumar</Text>
              <Text style={[styles.profileName, {fontWeight: '300'}]}>
                +91-9548563210
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.box2}>
        <View>
          <View style={styles.alignItemsBox}>
            <View style={styles.alignIcon}>
              <View style={styles.iconBox}>
                <AntDesign name="edit" size={20} color={'#000000'} />
              </View>
              <Text style={styles.commanText}>Edit Profile</Text>
            </View>
            <AntDesign name="right" size={20} color={'#000000'} />
          </View>
          <View style={styles.alignItemsBox}>
            <View style={styles.alignIcon}>
              <View style={styles.iconBox}>
                <AntDesign name="edit" size={20} color={'#000000'} />
              </View>
              <Text style={styles.commanText}>Change Password</Text>
            </View>
            <AntDesign name="right" size={20} color={'#000000'} />
          </View>
          <View style={styles.alignItemsBox}>
            <View style={styles.alignIcon}>
              <View style={styles.iconBox}>
                <AntDesign name="edit" size={20} color={'#000000'} />
              </View>
              <Text style={styles.commanText}>Settings</Text>
            </View>
            <AntDesign name="right" size={20} color={'#000000'} />
          </View>
          <View style={styles.alignItemsBox}>
            <View style={styles.alignIcon}>
              <View style={styles.iconBox}>
                <AntDesign name="edit" size={20} color={'#000000'} />
              </View>
              <Text style={styles.commanText}>Logout</Text>
            </View>
            <AntDesign name="right" size={20} color={'#000000'} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  box1: {
    width: sizes.width_proportion,
    minHeight: windowHeight / 2.2,
    alignSelf: 'center',
  },
  box2: {
    width: sizes.width_proportion,
    minHeight: windowHeight / 2.3,
    alignSelf: 'center',

    borderColor: 'red',
  },
  image: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: windowWidth / 2,
    alignSelf: 'center',
  },
  profileName: {
    color: '#161515',
    fontSize: normalizeFont(22),
    fontWeight: '500',
    marginTop: windowHeight / 240,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: windowWidth / 4,
    top: windowHeight / 5,
    // zIndex: 1,
  },
  backgroundImage: {
    justifyContent: 'center',
    height: windowHeight / 4,
    marginTop: windowHeight / 35,

    // elevation: 1, // works on android
  },
  iconBox: {
    width: windowWidth / 7,
    height: windowWidth / 7,
    borderRadius: windowWidth / 2,
    backgroundColor: '#b0b4d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignItemsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowHeight / 35,
  },
  commanText: {
    marginLeft: windowWidth / 35,
    fontSize: normalizeFont(22),
    fontWeight: '700',
  },
  alignIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
