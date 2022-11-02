import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import MyButton from '../../components/MyButton';
import { normalizeFont } from '../../constants/helper';
import {windowWidth,windowHeight} from  '../../constants/helper'

const width_proportion = '90%';
const height_proportion = '80%';

const IntroductionScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [navigationStatus, setNavigationStatus] = useState(false);
  const changeView = () => {
    setIndex(prev => {
      const tempIndex = prev + 1;
      setNavigationStatus(false)
      if (tempIndex > 2) {
        setNavigationStatus(true);
        setIndex(0);
        return;
      }
      return tempIndex;
    });
  };
  useEffect(() => {
    if (navigationStatus) {
      navigation.navigate('LoginScreen');
    }
  }, [navigationStatus]);


  return (
    <ScrollView style={styles.container}>
      {index == 0 && (
        <View>
          <View style={styles.box1}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} style={styles.skipButton}>
              <Text style={styles.skipButtonText}>skip</Text>
            </TouchableOpacity>
            <View>
              <Image
                style={styles.image}
                source={require('../.././assets/images/undraw_online_groceries_a02y.png')}
              />
              <View>
                <Text  style={styles.loremHeadingText}>
                  What is Lorem Ipsum?
                </Text>
                <View style={{width: windowWidth / 1.7}}>
                  <Text style={styles.loremText}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected
                  </Text>
                </View>
              </View>
              <View style={styles.Icon}>
                <Icon size={14} name="circle" color="#898989" />
                <Icon size={14} name="circle" color="#373737" />
                <Icon size={14} name="circle" color="#373737" />
              </View>
            </View>
          </View>
        </View>
      )}
      {index == 1 && (
        <View>
          <View style={styles.box1}>
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipButtonText}>skip</Text>
            </TouchableOpacity>
            <View>
              <Image
                style={styles.image}
                source={require('../.././assets/images/undraw_segmentation_re_gduq.png')}
              />
              <View>
                <Text style={styles.loremHeadingText}>
                  Where does it come from?
                </Text>
                <View style={{width: windowWidth / 1.7}}>
                  <Text style={styles.loremText}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected
                  </Text>
                </View>
              </View>
              <View style={styles.Icon}>
                <Icon size={14} name="circle" color="#373737" />
                <Icon size={14} name="circle" color="#898989" />
                <Icon size={14} name="circle" color="#373737" />
              </View>
            </View>
          </View>
        </View>
      )}
      {index == 2 && (
        <View>
          <View style={styles.box1}>
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipButtonText}>skip</Text>
            </TouchableOpacity>
            <View>
              <Image
                style={styles.image}
                source={require('../.././assets/images/undraw_data_report_re_p4so.png')}
              />
              <View>
                <Text style={styles.loremHeadingText}>Why do we use it?</Text>
                <View style={{width: windowWidth / 1.7}}>
                  <Text style={styles.loremText}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected
                  </Text>
                </View>
              </View>
              <View style={styles.Icon}>
                <Icon size={14} name="circle" color="#373737" />
                <Icon size={14} name="circle" color="#373737" />
                <Icon size={14} name="circle" color="#898989" />
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={styles.box2}>
        <MyButton
          onPress={changeView}
          IconName={'long-arrow-alt-right'}
         // title={`${index > 1 ? 'Finish' : 'Next'}`}
          size={sizes.btn_size_medium}
          color={colors.btn_primary}
        />
      </View>
    </ScrollView>
  );
};

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
    alignItems:'flex-end',
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginTop: windowHeight / 70,
  },
  skipButtonText: {
    fontSize: normalizeFont(18),
    color: '#11141C',
  },
  loremHeadingText: {
    color: colors.input_text,
    marginTop: windowHeight / 10,
    fontSize: normalizeFont(24),
  },
  loremText: {
    color: colors.detail_text_color,
  },
  Icon: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
    marginTop: windowHeight / 35,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: windowHeight / 20,
  },
  nextButtonText: {color: colors.btn_secondry},
  nextButton: {
    width: sizes.btn_size_medium,
    backgroundColor: colors.btn_primary,
    justifyContent: 'center',
  },
});

export default IntroductionScreen;
