import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import mapStyle from '../style.js';
const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../../data';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';
import {color} from 'react-native-reanimated';
import MapViewDirections from 'react-native-maps-directions';
import API_KEY from '../../API_KEY';
import Svg from 'react-native-svg';

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomon.ttf');

export default function Book({navigation}) {
  const [coordinates] = useState([
    {
      latitude: 6.704314,
      longitude: 79.907832,
    },
    {
      latitude: 6.705725,
      longitude: 79.908795,
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <View>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Feather name="menu" size={25} />
            <Feather name="x" size={25} />
          </View>
        </SafeAreaView>
      </View>

      <MapView
        provider="google"
        style={{width: width, height: height}}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.01, ///0.0622
          longitudeDelta: 0.01 * ASPECT_RATIO, ///0.0121
        }}
        customMapStyle={mapStyle}>
        <Marker
          coordinate={{
            latitude: 6.70572529756016,
            longitude: 79.90879556205854,
          }}>
          <View
            style={[
              styles.toolTips,
              {
                borderLeftColor: '#02dc9f',
              },
            ]}>
            <Text style={{color: '#a4a6ac'}}>Beach Road</Text>
            <Feather
              style={{color: '#a4a6ac'}}
              name="chevron-right"
              size={20}
            />
            {/*<Svg width="18" height="15" viewBox="0 0 18 15 ">
             <Path d="M9 15L0.339745 0L17.6603 0L9 152" fill="#C4C4C4" />
          </Svg>*/}
          </View>
          <View>
            <View
              style={[
                styles.dotWrapper,
                {
                  backgroundColor: 'rgba(2, 213, 155,0.25)',
                },
              ]}>
              <View style={[styles.dot, {backgroundColor: '#02d59b'}]} />
            </View>
          </View>
        </Marker>

        {/** SECONDD MARKER*/}

        <Marker
          coordinate={{
            latitude: 6.704195,
            longitude: 79.908008,
          }}>
          <View
            style={[
              styles.toolTips,
              {
                borderLeftColor: '#f74656',
              },
            ]}>
            <Text style={{color: '#f74656'}}>Uyankelle Road</Text>
            <Feather
              style={{color: '#f74656'}}
              name="chevron-right"
              size={20}
            />
            {/*<Svg width="18" height="15" viewBox="0 0 18 15 ">
           <Path d="M9 15L0.339745 0L17.6603 0L9 152" fill="#C4C4C4" />
        </Svg>*/}
          </View>
          <View>
            <View
              style={[
                styles.dotWrapper,
                {
                  backgroundColor: 'rgba(247, 70, 86,0.25)',
                },
              ]}>
              <View style={[styles.dot, {backgroundColor: '#f74656'}]} />
            </View>
          </View>
        </Marker>

        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={API_KEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="hotpink"
        />
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />

        {/*
        <MapViewDirections
          origin={{
            latitude: -6.336849,
            longitude: 107.278873, ////second one
          }}
          destination={{
            latitude: -6.335495,
            longitude: 107.280031,
          }}
          apikey={API_KEY}
          mode="WALKING"
          strokeColor="hotpink"
          strokeWidth={4}
          lineDashPattern={[6, 6]}
        />*/}
      </MapView>

      {/**car */}
      <View style={styles.buttonContent}>
        <View style={styles.actionButtonWrapper}>
          <Ionicons name="grid" size={18} style={{color: '#fff'}} />
        </View>
        <View style={styles.categoryWrapper}>
          {data.map(data => {
            return (
              <View key={data.id} styles={{alignItems: 'center'}}>
                <Text style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7'}}>
                  {data.name}
                </Text>
                <Car
                  style={{color: data.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
                  name={data.icon}
                  size={40}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.footerDescription}>
          <Text style={styles.footerTitle}>LKR 500-600</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: '#868891'}}>Note:</Text>
            <Text style={{color: '#868891'}}>
              This is approximate estimate.Actual cost may be different due to
              traffic & waiting time.
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.footerButton,
              {
                borderRightColor: '#f5f5f6',
                borderRightWidth: 2,
              },
            ]}>
            <Text style={styles.buttonText1}>Cash</Text>
          </View>
          <View
            style={[
              styles.footerButton,
              {
                borderLeftColor: '#f5f5f6',
                borderLeftWidth: 2,
              },
            ]}>
            <Text style={styles.buttonText2}>ABC123</Text>
          </View>
        </View>

        <View style={styles.footerCallAction}>
          <Text style={styles.footerCallActionText}>Book Now</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContent: {
    position: 'absolute',
    width,
    bottom: 0,
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  actionButtonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8f9098',
    alignSelf: 'center',
    marginBottom: 30,
  },
  footerDescription: {
    backgroundColor: '#f5f5f6',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 15,
  },
  footerTitle: {
    fontWeight: '600',
    color: '#909199',
    fontSize: 20,
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: '#e9e9eb',
    padding: 15,
    //paddingHorizontal: 20,
    //paddingVertical: 20,
    alignItems: 'center',
    width: width / 2 - 4,
  },
  buttonText1: {
    color: '#adaeb4',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonText2: {
    color: '#505225',
    fontSize: 16,
    fontWeight: '600',
  },
  footerCallAction: {
    width,

    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  footerCallActionText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },

  dotWrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  toolTips: {
    width: 220,
    backgroundColor: '#fff',
    position: 'relative',
    borderLeftWidth: 6,
    flexDirection: 'row',
    borderLeftColor: '#000',
    justifyContent: 'space-between',
    padding: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.05,
    borderRadius: 5,
    marginBottom: 2,
  },
});
