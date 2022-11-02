import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import ActionSheet from 'react-native-actionsheet';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import CameraPermission from '../constants/CameraPermission';
import Icon from 'react-native-vector-icons/AntDesign'
import { windowWidth,windowHeight } from '../constants/helper';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import { normalizeFont } from '../constants/helper';
const Camera = ({handlePhoto}) => {
    const [imageUri,setImageUri]=useState('')
    const launchCameraFun = async () => {
        const granted = CameraPermission();
        if (!granted) {
          console.log('Required Camera Permisssion');
          return;
        }
        const options = {
          mediaType: 'photo',
          quality: 1,
        };
    
        launchCamera(options, response => {
          if (response.assets) {
            const data = response.assets[0].uri;
    
            setImageUri(data);
          }
        });
      };
      const launchImageLibraryFun = () => {
        const options = {
          mediaType: 'photo',
          quality: 1,
        };
    
        launchImageLibrary(options, response => {
          if (response.assets) {
            const data = response.assets[0].uri;
    
            setImageUri(data);
          }
        });
      };
     
  return (
    <View>
         <ActionSheet
        ref={o => (this.ActionSheet = o)}
        title={'Which one do you like ?'}
        options={['Camera', 'Photo Library', 'Cancel']}
        cancelButtonIndex={2}
        onPress={buttonIndex => {
          switch (buttonIndex) {
            case 0:
              launchCameraFun();
              break;
            case 1:
              launchImageLibraryFun();
              break;
            default:
              break;
          }
        }}
      />
       {imageUri ? (
          <View style={styles.cardImage}>
            <TouchableOpacity>
              <Image
                style={styles.image}
                source={{uri: imageUri}}
                resizeMode={'cover'}
              />

              <Text style={styles.editText}>Edit Image</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={handlePhoto}>
            <View style={styles.image}>
              <Icon name="camera" size={40} />
            </View>
            <Text style={styles.imageText}>Profile Image</Text>
          </TouchableOpacity>
        )}
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
    image: {
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        borderRadius: 100,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight / 70,
      },
      imageText: {color: 'white', textAlign: 'center', fontSize: normalizeFont(20)},
})