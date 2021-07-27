import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

{
  /* npm i react-native-maps 
     npm i react-native-maps-directions
  */
}
const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
import MapViewDirections from 'react-native-maps-directions';
import API_KEY from '../../API_KEY';

const Places = ({navigation}) => {
  const [state, setstate] = useState({
    pickupCords: {
      latitude: 6.704314,
      longitude: 79.907832,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421 * ASPECT_RATIO, ///0.0121
    },
    dropLocationCord: {
      latitude: 6.705725,
      longitude: 79.908795,
      latitudeDelta: 0.01,
      longitudeDelta: 0.0421 * ASPECT_RATIO, ///0.0121
    },
  });

  const mapRef = useRef();
  const {pickupCords, dropLocationCord} = state;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        // style={StyleSheet.absoluteFill}
        style={{width: width, height: height}}
        // initialRegion={{
        //   latitude: 6.704314,
        //   longitude: 79.907832,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01 * ASPECT_RATIO,
        // }}

        initialRegion={pickupCords}>
        <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCord}
          apikey={API_KEY} // insert your API Key here
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
        <Marker coordinate={pickupCords} />
        <Marker coordinate={dropLocationCord} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Places;
