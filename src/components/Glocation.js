import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
let {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421 * ASPECT_RATIO;

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const INITIAL_MARKER = [
  {
    id: 1,
    title: 'Jie Jie Beach Hotel',
    description: 'Tel- 0382234534353',
    region: {
      latitude: 6.7034646,
      longitude: 79.9061982,
    },
    urlImg:
      'https://lh6.googleusercontent.com/proxy/ubcBXbPw6_AGwBLaPz2Un3vl67MDPD1g2gePArNZQGFDFaoTXBfiJYg_1oFoTXDKsCTVBi5RAgLKYWKiWd1-7xj2BRTetoo_Dh1c4vUIQ6YZ-PlxW3BBZ51TdzCY6H4K9TUBNfSnvxtik1a_HeuSPhCwV4V1FQ=w592-h404-n-k-no-v1',
  },

  {
    id: 2,
    title: 'CRYSTAL INDOOR BADMINTON COURT',
    description: 'Tel- 0382234423121',
    region: {
      latitude: 6.7035216,
      longitude: 79.9066727,
    },
    urlImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJvUKc0yFESTd9JTGK4UXM3HQiKXHtqX3Fw&amp;usqp=CAU',
  },
  {
    id: 3,
    title: 'Karoke Lounge By Jetwing',
    description: 'Tel- 038222321',
    region: {
      latitude: 6.7037545,
      longitude: 79.9063659,
    },
    urlImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMi6bnFH3pMfbYYA-wqqe31HOaZ0F7kAXBIqnt1iy6m6t8gLbYHFjJR_pBSriheRV3ME&amp;usqp=CAU',
  },
];

const Glocation = () => {
  let myMap;
  const [currentPosition, setCurrentPosition] = useState(initialState);
  const [marker, setMarker] = useState({});

  //stackoverflow.com/questions/55141383/react-native-null-reference-maps-markers-android

  https: useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        //alert(JSON.stringify(position));
        console.log('position longitude', position.coords.longitude);
        console.log('position latitude', position.coords.latitude);
        //const {currentLatitude, currentLongitude} = position.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => alert(error.message),
      {
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  const renderMarker = () => {
    return INITIAL_MARKER.map(_marker => (
      <Marker
        key={_marker.id}
        coordinate={_marker['region']}
        title={_marker.title}
        description={_marker.description}
        pinColor="blue"
        onPress={() => {
          setMarker(_marker);
          myMap.fitToCoordinates(_marker['region'], {
            edgePadding: {top: 10, bottom: 10, left: 10, right: 10},
            animated: true,
          });
        }}
      />
    ));
  };

  const renderDeatailMarker = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 5,
          flexDirection: 'row',
          backgroundColor: '#E1F5FE',
          width: '100%',
        }}>
        <Image
          source={{uri: marker['urlImg']}}
          resizeMode="cover"
          style={{width: 100, height: 90}}
        />
        <View style={{flex: 1, paddingLeft: 5, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold'}}>{marker['title']}</Text>
          <Text allowFontScaling={false}>{marker['description']}</Text>
        </View>
      </View>
    );
  };

  return currentPosition.latitude ? (
    <View style={styles.container}>
      <MapView
        ref={ref => (myMap = ref)}
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        toolbarEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        initialRegion={currentPosition}>
        {/*<Marker
          coordinate={currentPosition}
          title={'MR.Perera Chandana'}
          description={'Telephone : 0781234566'}
          pinColor="red"
          onPress={() => {
            myMap.fitToCoordinates(
              {
                latitude: currentPosition.latitude,
                longitude: currentPosition.longitude,
              },
              {
                edgePadding: {top: 10, bottom: 10, left: 10, right: 10},
                animated: true,
              },
            );
          }}
        />*/}
        {renderMarker()}
      </MapView>

      {marker.hasOwnProperty('id') && renderDeatailMarker()}

      {/*<MapView.Circle
        center={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        }}
        radius={100}
        strokeWidth={4}
        strokeColor={'#1a66ff'}
        fillColor={'#1a66ff'}
      />*/}
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

export default Glocation;

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
