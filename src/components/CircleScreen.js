import React, {Component} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Polygon,
  Circle,
} from 'react-native-maps';
import {StyleSheet, Alert, Text, View, Dimensions, Image} from 'react-native';
import markerImg from '../assets/images/sushi.png';
///https://www.youtube.com/watch?v=q4fW3h9Mb7M
export default class CircleScreen extends React.Component {
  state = {
    coordinates: [
      {name: '1', latitude: 37.8025259, longitude: -122.4351431},
      {name: '2', latitude: 37.7896386, longitude: -122.421646},
      {name: '3', latitude: 37.7665248, longitude: -122.4161628},
      {name: '4', latitude: 37.7734153, longitude: -122.4577787},
      {name: '5', latitude: 37.7948605, longitude: -122.4596065},
    ],
  };

  showWelcomeMessage = () =>
    Alert.alert('Welcome to San Francisco', 'The food is amazing', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
      },
    ]);

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
          <Polygon
            coordinates={this.state.coordinates}
            fillColor={'rgba(100, 100, 200, 0.3)'}
          />
          <Circle
            center={{latitude: 37.8025259, longitude: -122.4351431}}
            radius={1000}
            stroke={3}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
          <Marker
            draggable
            coordinate={{latitude: 37.7825259, longitude: -122.4351431}}
            title={'San Francisco'}>
            <Callout onPress={this.showWelcomeMessage}>
              <Image source={require('../assets/images/sushi.png')} />
              <Text>Your text description here </Text>
            </Callout>
          </Marker>

          {this.state.coordinates.map(marker => (
            <Marker
              key={marker.name}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}>
              <Callout onPress={this.showWelcomeMessage}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/images/sushi.png')}
                />
                <Text>={marker.name}</Text>
              </Callout>
            </Marker>
          ))}
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
