import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mapStyle from '../style.js';
const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = ({navigation}) => {
  return (
    <MapView
      provider="google"
      style={{width: width, height: height}}
      initialRegion={{
        latitude: -6.337131,
        longitude: 107.279725,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01 * ASPECT_RATIO,
      }}
      customMapStyle={mapStyle}>
      <Marker
        coordinate={{
          latitude: -6.335495,
          longitude: 107.280031,
        }}>
        <View style={styles.pin}>
          <Fontisto
            name="map-marker-alt"
            size={30}
            style={{color: '#02dc9f'}}
          />
        </View>
      </Marker>

      <Marker
        coordinate={{
          latitude: -6.339089,
          longitude: 107.278325,
        }}>
        <View style={styles.marker}>
          <Ionicons name="navigate" size={20} style={{color: '#fff'}} />
        </View>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: 135,
    height: 135,
    borderRadius: 135,
    backgroundColor: 'rgba(2,220, 159,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Map;
