import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import {Input} from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Voice from '@react-native-voice/voice';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
var Spinner = require('react-native-spinkit');
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {windowHeight, windowWidth} from '../constants/helper';
const SearchInput = ({
  inputs,
  setInputs,
  microphone,
  products,
  setNewProducts,
}) => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [visible, setVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState('');
  const [inputTextResult, setInputsTextResult] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = e => {
    console.log('start handler==>>>', e);
  };
  const onSpeechEndHandler = e => {
    setLoading(false);
    console.log('stop handler', e);
  };

  const onSpeechResultsHandler = e => {
    let text = e.value[0];
    setResult(text);
    stopRecording();
    setSuccessMessage(true);
    console.log('speech result handler', e);
  };

  const startRecording = async () => {
    setLoading(true);
    setSuccessMessage(false);
    setErrorText(false);

    setVisible(true);
    try {
      await Voice.start('en-Us');
    } catch (error) {
      console.log('error raised', error);
    }
  };
  const onSpeechError = e => {
    //Invoked when an error occurs.

    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
    if (e.error) {
      const errorMessage = JSON.stringify(e.error.message);

      if (errorMessage.toLocaleLowerCase().slice(3, 11) == 'no match') {
        console.log('coming-----');
        setErrorText(true);
      }
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.log('error raised', error);
    }
  };

  useEffect(() => {
    setInputsTextResult(inputs.text);
  }, [inputs.text]);

  useEffect(() => {
    setTimeout(() => {
      if (successMessage) {
        setVisible(false);
      }
    }, 100);
  }, [successMessage]);
  console.log('resut', result);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  useEffect(() => {
    console.log('pressing', result, inputTextResult);
    if (inputTextResult) {
      setErrorText(false);
    }
    setInputsTextResult(result);
    setInputs({text: result});
  }, [result]);
  useEffect(() => {
    let filterItems;
    let lastText;

    if (inputTextResult) {
      lastText = inputTextResult.split(' ');
      lastText = lastText.filter(item => item !== '');
    }
    console.log('lastText', lastText);
    // console.log('filterItems',finalText.split(' '))
    if (lastText) {
      // filterItems=products?.filter((product) =>product.keyWords.toLowerCase().includes(inputTextResult.toLowerCase()))
      filterItems = products?.filter(product =>
        lastText.some(word =>
          product.keyWords.toLowerCase().includes(word.toLowerCase()),
        ),
      );
    } else {
      setNewProducts && setNewProducts(products);
    }
    if (filterItems) {
      setNewProducts(filterItems);
    }
  }, [inputTextResult]);
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          style={{
            width: '100%',
            alignSelf: 'center',
            height: '100%',
            justifyContent: 'flex-start',
            backgroundColor: 'green',
          }}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setVisible(!visible);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
            }}>
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '600',
                      marginBottom: 5,
                    }}>
                    Google
                  </Text>

                  {errorText ? (
                    <>
                      <Entypo name="circle" size={70} color={'#ff9494'} />
                      <Icon
                        style={{
                          position: 'absolute',
                          top: windowHeight / 18,
                          right: windowWidth / 2.36,
                        }}
                        size={30}
                        name="microphone"
                        color="white"
                      />
                    </>
                  ) : (
                    !successMessage && (
                      <>
                        <Spinner
                          isVisible={true}
                          size={70}
                          type={'Pulse'}
                          color={'#ffffff'}
                        />
                        <Icon
                          style={{
                            position: 'absolute',
                            top: windowHeight / 18,
                            right: windowWidth / 2.37,
                          }}
                          size={30}
                          name="microphone"
                          color="white"
                        />
                      </>
                    )
                  )}

                  {successMessage && (
                    <AntDesign
                      style={{marginTop: 5}}
                      name="checkcircleo"
                      size={60}
                      color="#4bb543"
                    />
                  )}
                  {inputTextResult?.length > 0 ? (
                    <Entypo
                      size={22}
                      name="dots-three-horizontal"
                      color="#4bb543"
                    />
                  ) : errorText ? (
                    <Entypo
                      size={22}
                      name="dots-three-horizontal"
                      color="#ff9494"
                    />
                  ) : (
                    <Spinner
                      isVisible={true}
                      size={30}
                      type={'ThreeBounce'}
                      color={'#ffffff'}
                    />
                  )}

                  <Text
                    style={[
                      {
                        color: successMessage ? 'white' : '#ff9494',
                        fontWeight: 'bold',
                        marginTop: 10,
                      },
                    ]}>
                    {errorText
                      ? 'Did not catch that. Try speaking again.'
                      : inputTextResult}
                  </Text>
                  {errorText && (
                    <TouchableOpacity
                      onPress={() => {
                        setResult('');
                        setInputs({text: result});
                        startRecording();
                      }}
                      style={{
                        borderRadius: 5,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 30,
                        borderColor: '#fff',
                        borderWidth: 1,
                      }}>
                      <Text style={{color: '#4bb543', fontWeight: 'bold'}}>
                        Try again
                      </Text>
                    </TouchableOpacity>
                  )}

                  <Text style={{color: '#d3d3d3', marginTop: 10}}>
                    English(United Kingdom)
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableWithoutFeedback>
      <Input
        containerStyle={{paddingHorizontal: 0, width: (windowWidth * 7.3) / 10}}
        style={styles.searchInput}
        // onBlur={onBlur}
        onChangeText={text => handleOnchange(text, 'text')}
        placeholder="Search"
        placeholderTextColor="#C0C0C0"
        value={inputs.text}
        inputContainerStyle={[styles.inputContainerStyle]}
        leftIcon={
          <Icon
            type="material"
            name="search"
            size={24}
            color="gray"
            style={[styles.searchIconStyle]}
          />
        }
        rightIcon={
          microphone && (
            <SimpleLineIcons
              onPress={() => {
                setResult('');
                setInputs({text: result});
                startRecording();
              }}
              name="microphone"
              size={24}
              color="gray"
              style={[styles.iconStyle]}
            />
          )
        }
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#d9daec',
    height: windowWidth / 7,
    //   paddingLeft: 10,
    color: '#C0C0C0',
    borderRadius: 30,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.input_text_focus,
    borderRadius: 8,
    backgroundColor: '#d9daec',
  },
  searchIconStyle: {
    marginLeft: 20,
  },
  iconStyle: {marginRight: 20},
  // imageButton: {
  //   width: 30,
  //   height: 30,
  //   position: 'absolute',
  //   top: -33,
  //   right: 0,
  // },
  textWithSpaceStyle: {
    // flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
