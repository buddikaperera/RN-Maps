import React from 'react';
import LocationView from 'react-native-location-view';
import {View} from 'react-native';
import {GOOGLE_MAP_KEY} from '../constants/googleMapKey';

export default class SelectLocationScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={{flex: 1}}>
        <LocationView
          apiKey={'GOOGLE_MAP_KEY'}
          initialLocation={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </View>
    );
  }
}
