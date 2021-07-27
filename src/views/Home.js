import React from 'react';
//https://www.codegrepper.com/code-examples/javascript/android+react-native-vector-icons+not+showing
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from '../style.js';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Map from './Map.js';
import data from '../../data';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';

//const {height, width} = Dimensions.get('window');
//const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomon.ttf');

const Home = ({navigation}) => {
  let mapShow = false;
  return (
    <View style={{flex: 1}}>
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={25} />
          </View>
          <TouchableOpacity style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View>
                <Text style={styles.inputText}>Pick up Location</Text>
              </View>
            </View>

            <View>
              <Feather name="heart" size={20} style={{color: '#97989f'}} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <Map />
        <View style={styles.categoryWrapper}>
          {data.map(data => {
            return (
              <View key={data.id} style={styles.category}>
                <Text style={{color: 'rgba(0,0,0,.5)'}}>{data.name}</Text>
                <Car
                  style={{color: 'rgba(0,0,0,.5)'}}
                  name={data.icon}
                  size={45}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit to Pick up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.05,
  },
  greenDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#0ddda2',
    marginRight: 10,
  },
  inputText: {
    fontWeight: '600',
    color: '#8b8d96',
  },
  inputWrapper: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  categoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: '#4554',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    top: 150, //height/4
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    shadowOpacity: 0.01,
  },
  category: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
/// <Text style={{color: data.id === '1' ? '#5d5e6b' : '#c12c7'}}>
