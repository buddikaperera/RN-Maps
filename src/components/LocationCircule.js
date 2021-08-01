import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import markerImg from '../assets/images/sushi.png';

export default class LocationCircule extends React.Component {
  state = {
    coordinates: [
      {name: '1', latitude: 37.8025259, longitude: -122.4351431},
      {name: '2', latitude: 37.7896386, longitude: -122.421646},
      {name: '3', latitude: 37.7665248, longitude: -122.4161628},
      {name: '4', latitude: 37.7734153, longitude: -122.4577787},
      {name: '5', latitude: 37.7948605, longitude: -122.4596065},
      {name: '6', latitude: 37.8025259, longitude: -122.4351431},
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}
          style={styles.mapStyle}>
          <Marker
            coordinate={{latitude: 37.7825259, longitude: -122.4351431}}
            title={'San Francisco'}>
            <Callout>
              <Image source={require('../assets/images/sushi.png')} />
              <Text>Your text description here </Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
