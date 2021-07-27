import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421 * ASPECT_RATIO;

export default class CurrentLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },
      error => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    Geolocation.getCurrentPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    });
  }
  componentWillUnmount() {}
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation={true}
        region={this.state.region}
        initialRegion={this.state.region}
        /// onRegionChange={ region => this.setState({region}) }
        //onRegionChangeComplete={ region => this.setState({region}) }
      >
        <MapView.Marker
          coordinate={this.state.region}
          title={'Marker Title'}
          description={'Marker Description Text'}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
AppRegistry.registerComponent('CurrentLocation', () => CurrentLocation);
