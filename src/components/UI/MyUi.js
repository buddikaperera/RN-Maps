import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import appTheme from '../../constants/appColors';

const MyUi = ({navigation}) => {
  return (
    <View>
      <View style={styles.containerProgressBar}>
        <View style={styles.teamWrapper}>
          <Text>AAA</Text>
        </View>
      </View>
      <View style={styles.containerProgressBar}>
        <View style={styles.teamWrapper}>
          <Text>BBB</Text>
        </View>
      </View>
      <View style={styles.containerProgressBar}>
        <View style={styles.teamWrapper}>
          <Text>CC</Text>
        </View>
      </View>

      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => handleBackButton()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={25}
                color="gray"
              />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContent}>
            <Text style={styles.largeText}>Welcome Back!</Text>
            <Text style={styles.smallText}>
              Log into your account &amp; manage {'\n'}your tasks
            </Text>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={20} color="gray" />
              <TextInput
                placeholder="Username"
                placeholderTextColor="gray"
                style={styles.textInput}
              />
            </View>
            <View style={styles.inputRow}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="gray"
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="gray"
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>
            <View style={styles.inputRow}>
              <MaterialIcons name="lock-outline" size={20} color="gray" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                style={styles.textInput}
              />
              <Octicons name="eye-closed" size={20} color="gray" />
            </View>
            <View style={styles.savePwdRow}>
              <Text style={styles.savePwdText}>Save Password</Text>
              <Switch
                trackColor={{
                  false: appTheme.INACTIVE_COLOR,
                  true: appTheme.COLOR2,
                }}
                thumbColor="#fff"
                value={true}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyLogin')}
              style={styles.signUpBtnWrapper}>
              <Text style={styles.signUpBtnText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MyLogin')}
              style={styles.loginBtnWrapper}>
              <Text
                style={styles.loginBtnText}
                onPress={() => navigation.navigate('MyLogin')}>
                Already have an account? LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default MyUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    height: 125,
    width: 125,
  },
  imageStyle: {
    width: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    height: (Dimensions.get('window').width - (30 + 2 * 3)) / 3,
    justifyContent: 'center',
  },
  listItem: {
    maxWidth: Dimensions.get('window').width / 2,
    flex: 0.5,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4,
    marginTop: 18,
    marginBottom: 18,
    marginRight: 18,
    marginLeft: 18,
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
  inputStyle: {
    margin: 15,
  },

  containerProgressBar: {
    backgroundColor: '#d8d8d8',
    padding: 10,
    height: 55,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 8,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // taskProgressIndicator: {marginRight: 10},
  // taskMiddleColumn: {width: '50%', marginRight: 'auto'},
  // taskTitle: {
  //   fontWeight: 'bold',
  //   marginBottom: 3,
  // },
  // taskProgressBar: {borderRadius: 7, height: 6},
  teamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10,
  },

  backButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'gray',
  },
  bodyContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: appTheme.INACTIVE_COLOR,
    fontWeight: '500',
    marginBottom: 40,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 35,
    height: 40,
  },
  textInput: {fontSize: 17, flex: 1, color: '#000', height: 45},
  savePwdRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  savePwdText: {color: appTheme.COLOR2, fontWeight: 'bold'},
  loginBtnWrapper: {
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7,
  },
  loginBtnText: {fontWeight: 'bold', fontSize: 16, color: '#000000aa'},
  signUpBtnWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7,
    marginBottom: 15,
  },
  signUpBtnText: {fontWeight: 'bold', fontSize: 16, color: '#fff'},
  // memberPhoto: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 50,
  //   marginLeft: -10,
  // },
});
