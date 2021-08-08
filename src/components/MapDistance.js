import React, {useState, useEffect} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Polyline from '@mapbox/polyline';

const {width, height} = Dimensions.get('window');

const locations = require('../../mylocations.json');

const MapDistance = () => {
  const [coords, setCoords] = useState([]);
  const [travelDistance, setTravelDistance] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const [coordinates] = useState([
    {
      latitude: 6.7034646,
      longitude: 79.9061982,
    },
    {
      latitude: 6.7056915,
      longitude: 79.90645,
    },
  ]);

  useEffect(() => {
    getDirections('6.7034646, 79.9061982', '6.7056915,79.906450');
  }, []);

  const renderMarkers = () => {
    return (
      <View>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </View>
    );
  };

  const mergeCoords = () => {
    const {latitude, longitude, desLatitude, desLongitude} = this.state;

    const hasStartAndEnd = latitude !== null && desLatitude !== null;

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`;
      const concatEnd = `${desLatitude},${desLongitude}`;
      getDirections(concatStart, concatEnd);
    }
  };

  const onMarkerPress = location => {
    // const {
    //   coords: {latitude, longitude},
    // } = location;

    console.log('location press', location);

    // this.setState(
    //   {
    //     destination: location,
    //     desLatitude: latitude,
    //     desLongitude: longitude,
    //   },
    //   this.mergeCoords,
    // );
  };

  const renderAllMarkers = () => {
    //const {locations} = this.state;
    console.log('locations', locations);
    return (
      <View>
        {locations.map((location, idx) => {
          const {
            coords: {latitude, longitude},
          } = location;
          return (
            <Marker
              key={idx}
              coordinate={{latitude, longitude}}
              onPress={() => onMarkerPress(location)}
            />
          );
        })}
      </View>
    );
  };

  const getDirections = async (startLoc, destinationLoc) => {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyBVsA-WWYwb1dESG0sAk7I-4p9XTqFqUGw`,
      );
      let respJson = await resp.json();
      // console.log('respJson >>>', respJson);
      //console.log('duration >>>', respJson.routes[0].legs[0].distance.text);
      //console.log('time  >>>', respJson.routes[0].legs[0].duration.text);

      const distance = respJson.routes[0].legs[0].distance.text;
      const time = respJson.routes[0].legs[0].duration.text;

      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);

      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1],
        };
      });

      setCoords(coords);
      setTravelDistance(distance);
      setTravelTime(time);
      return coords;
    } catch (error) {
      alert(error);
      return error;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          paddingTop: 1,
          alignSelf: 'center',
          alignItems: 'center',
          height: height * 0.1,
          backgroundColor: 'white',
          justifyContent: 'flex-end',
        }}>
        <Text style={{fontWeight: 'bold'}}>Estimated Time: {travelTime}</Text>
        <Text style={{fontWeight: 'bold'}}>
          Estimated Distance: {travelDistance}
        </Text>
      </View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        {
          renderAllMarkers()
          //renderMarkers()
        }
        {
          <MapView.Polyline
            coordinates={coords}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColor="red"
            strokeWidth={6}
          />
        }
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
  mapStyle: {
    width: width,
    height: height,
  },
});
export default MapDistance;
